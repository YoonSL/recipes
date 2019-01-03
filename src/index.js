import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



const RecipeAppHeader = (props) => (
    <div className ="header">
        <p className = "headerText">{props.title}</p>
    </div>
)
const SearchForm = (props) => (
    <form>
        <input value = {props.searchVal} onChange = {props.inputHandler} className = "searchBox" placeholder = "Search Text Here"></input>
        <button onClick = {props.selectedRecipe}>search</button>
        </form>
)

const RecipeCard = (props) => (
    <div className='recipeview' onClick={props.userClick}>
        <p>{props.selfoods.name.toUpperCase()}</p>
    </div>
)

const DirectoryView = (props) => (
    <div>
        <SearchForm inputHandler={props.inputHandler} searchVal={props.searchVal} selectedRecipe={props.selectedRecipe} />
        {props.selfoods.map((food, i) => <RecipeCard userClick = {props.userClick} selfoods={food} key={i} />)}
        
    </div>
)

const DetailView = (props) => (

    <div >
        <h2 className = "nameHeader">{props.foods.name.toUpperCase()}</h2>
        <ul className='ingredients'>
            <h3>INGREDIENTS</h3>
            {props.foods.ingredients
                .map((e, i) =>
                    <li
                        className='items'
                        key={i}>{e}</li>)}
        </ul>
        <ul className='instructions'>
            <h3>INSTRUCTIONS</h3>
            {props.foods.instructions
                .map((e, i) =>
                    <li
                        className='instruction-item'
                        key={i}>{e}</li>)}
        </ul>
    </div>
)

class App extends React.Component{
    state = {
        food: [
            {
                id: 1,
                name: 'turkey + stuff',
                ingredients: ['turkey', 'mustard', 'greens', 'celery', 'potato'],
                instructions: ['pre-heat over to 350', 'tickle the turkey', 'cut some celery']
            },
            {
                id: 2,
                name: 'unicorn + stuff',
                ingredients: ['unicorn', 'mustard', 'greens', 'celery', 'potato'],
                instructions: ['pre-heat over to 350', 'tickle the unicorn', 'cut some celery']
            },
            {
                id: 3,
                name: 'dragon + stuff',
                ingredients: ['dragon', 'mustard', 'greens', 'celery', 'potato'],
                instructions: ['pre-heat over to 350', 'tickle the dragon', 'cut some celery']
            },
            {
                id: 4,
                name: 'fish + stuff',
                ingredients: ['fish', 'mustard', 'greens', 'celery', 'potato'],
                instructions: ['pre-heat over to 350', 'tickle the fish', 'cut some celery']
            },
            {
                id: 5,
                name: 'chicken + stuff',
                ingredients: ['chicken', 'mustard', 'greens', 'celery', 'potato'],
                instructions: ['pre-heat over to 350', 'tickle the chicken', 'cut some celery']
            },
            {
                id: 6,
                name: 'shrimp + boil',
                ingredients: ['shrimp', 'mustard', 'greens', 'celery', 'potato'],
                instructions: ['pre-heat over to 350', 'tickle the shrimp', 'cut some celery']
            },
            {
                id: 7,
                name: 'tuna + boil',
                ingredients: ['tuna', 'mustard', 'greens', 'celery', 'potato'],
                instructions: ['pre-heat over to 350', 'tickle the tuna', 'cut some celery']
            },
            {
                id: 8,
                name: 'meatball + boil',
                ingredients: ['meatball', 'mustard', 'greens', 'celery', 'potato'],
                instructions: ['pre-heat over to 350', 'tickle the meatball', 'cut some celery']
            },
            {
                id: 9,
                name: 'clam + fry',
                ingredients: ['clam', 'mustard', 'greens', 'celery', 'potato'],
                instructions: ['pre-heat over to 350', 'tickle the clam', 'cut some celery']
            },
            {
                id: 10,
                name: 'pork + fry',
                ingredients: ['pork', 'mustard', 'greens', 'celery', 'potato'],
                instructions: ['pre-heat over to 350', 'tickle the pork', 'cut some celery']
            },
            {
                id: 11,
                name: 'beef + fry',
                ingredients: ['beef', 'mustard', 'greens', 'celery', 'potato'],
                instructions: ['pre-heat over to 350', 'tickle the beef', 'cut some celery']
            },
            {
                id: 12,
                name: 'potato + burn',
                ingredients: ['potato', 'mustard', 'greens', 'celery', 'potato'],
                instructions: ['pre-heat over to 350', 'tickle the potato', 'cut some celery']
            },
            {
                id: 13,
                name: 'carrot + burn',
                ingredients: ['carrot', 'mustard', 'greens', 'celery', 'potato'],
                instructions: ['pre-heat over to 350', 'tickle the carrot', 'cut some celery']
            },
            {
                id: 14,
                name: 'apple + burn',
                ingredients: ['apple', 'mustard', 'greens', 'celery', 'potato'],
                instructions: ['pre-heat over to 350', 'tickle the apple', 'cut some celery']
            },
            {
                id: 15,
                name: 'orange + stuff',
                ingredients: ['orange', 'mustard', 'greens', 'celery', 'potato'],
                instructions: ['pre-heat over to 350', 'tickle the orange', 'cut some celery']
            }
        ],
    input: '',
    selectedRecipes : [],
    clickedFood : 0
}
userClick = (e) => {
    // console.log('hi');
    e.preventDefault();
    const clickedFood = this.state.food.filter(food => food.name.toUpperCase() === e.target.innerHTML)
    this.setState({ clickedFood: clickedFood[0].id -1})
    // console.log(clickedFood);
}

    inputHandler = (e) => {
        e.preventDefault();
        this.setState({input : e.target.value})
    }
    searchHandler = (e)=>{
        e.preventDefault();
        const nameMap = this.state.food.map(name => name.name);
        const newArr = nameMap.filter(e => e === console.log(e));
        // console.log(newArr);
        this.setState({food : newArr});
        // console.log(this.state.food);
    }

    selectedRecipe = (e) => {
        e.preventDefault();
        const searchVal = this.state.input.toLowerCase();
        const includeFoods = this.state.food.filter(food => food.name.toLowerCase().includes(searchVal));
        this.setState({ selectedRecipes: includeFoods })
    }

    render() {
        const foodList = this.state.selectedRecipes;
        return (
            <div className ="outerbox">
            <div className ="headerTitle">
            <RecipeAppHeader title = "RecipeApp"/>
            </div>
            <div className = "leftBox">
            <DirectoryView
                selfoods={foodList}
                searchHandler = {this.searchHandler}
                inputHandler={this.inputHandler}
                searchVal={this.state.searchVal}
                selectedRecipe={this.selectedRecipe}
                userClick = {this.userClick}
            />
            </div>
            <div className ="rightBox">
            <DetailView 
                foods={this.state.food[this.state.clickedFood]}
                />
                </div>
            </div>
        )
    }       
}

ReactDOM.render(<App />, document.getElementById('root'));

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
        <input value = {props.value} onChange = {props.inputHandler} className = "searchBox" placeholder = "Search Text Here"></input>
        <button onClick = {props.searchHandler}>search</button>
        </form>
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
    input: ''
}

    inputHandler = (e) => {
        e.preventDefault();
        this.setState({input : e.target.value})
        console.log(this.state.input)
        console.log(this.state.food.name)
    }
    searchHandler = (e)=>{
        e.preventDefault();
        const nameMap = this.state.food.map(name => name.name);
        const newArr = nameMap.filter(e => e === console.log(e));
        // console.log(newArr);
        this.setState({food : newArr});
        // console.log(this.state.food);
    }
    render() {
        return (
            <div className ="outerbox">
            <div className ="headerTitle">
            <RecipeAppHeader title = "RecipeApp"/>
            </div>
                <div className = "leftBox">
                    <SearchForm 
                    value = {this.state.input}
                    inputHandler = {this.inputHandler}
                    searchHandler = {this.searchHandler}/>

                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

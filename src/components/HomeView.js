import React from 'react';
import MatchContainer from './MatchContainer';
import CreatePlantForm from './CreatePlantForm';

const API_BASE = 'http://localhost:3001/plants'

class HomeView extends React.Component {
    state = {
        plants: [],
        search: "",
        showCreateForm: false,
    }


    componentDidMount(){
        fetch(API_BASE)
            .then(res => res.json())
            .then(plants => this.setState({ plants }))
    }

    toggleCreateForm = () => this.setState({ showCreateForm: !this.state.showCreateForm })


    /**
     * TODO: ONLY FOR ADVANCED DELIVERABLES
     * Once you post a new plant, you'll need to update the plants on state here.
     * Define a method that can add a new plant into the plants array.
     */

     handleNewPlant = (newPlant) => {
        this.setState(({plants:[...this.state.plants, newPlant]}))
        // now, 'plants' in state is equal to what it used to be (we copy-pasted it's existing value- an array of plant objects- using the spread operator), PLUS a new plant object (it's equal to the old array, with one more now added on)
     }

    // example of functional set state with prevState:

    //  addLike = () => {
    //      this.setState(prevState=>({likes: prevState.likes +1}))
    //  }

     handleSearchChange = e => {
        this.setState({search: e.target.value},
          console.log(this.state.search)  
        )
    }

    render(){
        const { plants, showCreateForm } = this.state
        // TODO: In order to search, what state, methods and element attributes are needed? 
        // In order to render the correct plants, what calculations do you need to do and what props do you need to change below?
        let filteredPlants = this.state.plants.filter(plant=>plant.Common_Name.toLowerCase().includes(this.state.search.toLowerCase()))
        // if 'search' in state is  an empty string "" (user didn't type anything in search field), filteredPlants will be equal to all plants, because "any string".includes("") evaluates to true
        return (
            <div>
                <button onClick={this.toggleCreateForm}>{showCreateForm ? "Hide Form" : "Submit Plant"}</button>
                { showCreateForm && <CreatePlantForm handleNewPlant={this.handleNewPlant}/>}
                <hr />
                <div>
                    <input placeholder="Search for Plants" onChange={this.handleSearchChange}/>
                </div>
                {/* change to filtered plants below */}
                <MatchContainer plants={filteredPlants}/>
            </div>
        )
    }
}

export default HomeView;



// this.state.games.map(game=>(<GameCard {...game}/>))

// {
//     name: "monopoly",
//     minAge: 5,
// }

// DON"T NEED TO WRITE this.props.game.name NOW, CAN WRITE this.props.name


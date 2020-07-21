import React from 'react';

const API_BASE = 'http://localhost:3001/plants'

class CreatePlantForm extends React.Component {
    state = {
        Common_Name: "",
        Scientific_Name: "",
        img_name: ""
        // Remember: each input field needs to be represented in state for a fully controlled form
    }

    

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault() // SO THAT PAGE DOESN'T RELOAD (which would usually be the default behavior of a submit-- we want to prevent that, don't want page reloading on user)
        fetch(API_BASE, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
            },
            body: JSON.stringify(this.state)
            // body: JSON.stringify(
                //     {
                //     Common_Name: this.state.Common_Name,
                //     Scientific_Name: this.state.Scientific_Name,
                //     img_name: this.state.img_name
                //     }
                // )
               
        })
        .then(resp=>resp.json())
        .then(newPlantObject => this.props.handleNewPlant(newPlantObject),
            this.setState({Common_Name: "", Scientific_Name: "", img_name: ""})   
        )
            
    }

    render(){
        
        return (
            <form className="vertical-flex" onSubmit={this.handleSubmit}>
                <h4>Submit a New Plant</h4>
                <input name="Common_Name" placeholder="Common Name" value = {this.state.Common_Name} onChange={this.handleChange}/>
                <input name="Scientific_Name" placeholder="Scientific Name" value = {this.state.Scientific_Name} onChange={this.handleChange}/>
                <input name="img_name"placeholder="Image" value = {this.state.img_name} onChange={this.handleChange}/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default CreatePlantForm;
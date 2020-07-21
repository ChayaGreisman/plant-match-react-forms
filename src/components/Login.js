import React from 'react';

class Login extends React.Component {

    state = {
        name: "",
        username: "",
        password: "",
        confirmPassword: ""
        
    // For a fully controlled form, we need a piece of state for every input field. We set an initial value of each piece of state
    }
    

    // we can use one handleChange function for all input fields here because we put name attributes that exactly match the key in state on each input. ie--> when someone types in the name field, the event target is that field, so e.target.name returns "name", and it's equivalent to doing this.setState({name: e.target.value})
    handleChange = e => {
        this.setState(
            {[e.target.name] : e.target.value},
            console.log(this.state)
        )
    }
    // dog = {name: 'Sam', age: 4}
    // dog.name
    // dong['name']

    handleSubmit = e => {
        e.preventDefault() // SO THAT PAGE DOESN'T RELOAD (which would usually be the default behavior of a submit-- we want to prevent that, don't want page reloading on user)
        this.props.changeView('home')
        this.props.changeUserNameGreeting(this.state.name)
    }
    // ^^^^ HINT: Use the line below to change the view when the form is submitted
    // this.props.changeView('home')

    render(){
        //  the necessary attributes below on each input field are 1) name (for our handleChange to be abstracted/usable for all input fields- so we can set the corresponding key in state with it) 2) value---> we set the value of each input field to be equal to whatever is currently in the corresponding key in state 
        // necessary event listeners are: 1) onChange for each input field  2) onSubmit for the whole form itself.   these event listeners immediately trigger the functions they are set equal to (here, handleChange and handleSubmit)
        return (
            <form className="vertical-flex" onSubmit={this.handleSubmit}>
                <h2>Create an Account</h2>
                <input name="name" placeholder="Name" value= {this.state.name} onChange={this.handleChange}/> {/* the function that you call for any event listener implicitly gets passed the event itself as an argument ----> onChange={(e)=>this.handleChange(e)} */}
                <input name="username" placeholder="Username" value= {this.state.username} onChange={this.handleChange}/>
                <input type="password" name="password" placeholder="Password" value= {this.state.password} onChange={this.handleChange}/>
                <input type="password" name="confirmPassword" placeholder="Confirm Password" value= {this.state.confirmPassword} onChange={this.handleChange}/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Login;
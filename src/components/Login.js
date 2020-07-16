import React from 'react';

class Login extends React.Component {

    state = {
        name: "",
        username: "",
        password: "",
        confirmPassword: ""
        
        // TODO: What needs to be represented in state for a fully controlled form?
    }
    // TODO: What methods need to be created for a fully controlled form?
    handleChange = e => {
        this.setState(
            {[e.target.name]: e.target.value}
        )
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.changeView('home')
        this.props.changeUserNameGreeting(this.state.name)
    }
    // HINT: Use the line below to change the view when the form is submitted
    // this.props.changeView('home')

    render(){
        // TODO: What additional attributes and event handlers are needed on each of the elements below?
        return (
            <form className="vertical-flex" onSubmit={this.handleSubmit}>
                <h2>Create an Account</h2>
                <input name="name" placeholder="Name" value= {this.state.name} onChange={this.handleChange}/>
                <input name="username" placeholder="Username" value= {this.state.username} onChange={this.handleChange}/>
                <input type="password" name="password" placeholder="Password" value= {this.state.password} onChange={this.handleChange}/>
                <input type="password" name="confirmPassword" placeholder="Confirm Password" value= {this.state.confirmPassword} onChange={this.handleChange}/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Login;
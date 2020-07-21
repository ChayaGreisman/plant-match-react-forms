import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import HomeView from './components/HomeView';

class App extends React.Component {
  state = {
    view: 'home',
    username: 'Chaya' // TODO: replace null with 'ChromeBoi' or your name to see the greeting
  }

  changeView = (view) => {
    this.setState({ view })
  }

  changeUserNameGreeting =(name) => {
    this.setState({username: name})
  }


  render() {
    return (
      <div className="App">
       <Navbar changeView={this.changeView} view={this.state.view} username={this.state.username} />
       {this.state.view === 'login' && <Login changeView={this.changeView} changeUserNameGreeting={this.changeUserNameGreeting}/>}
       {this.state.view === 'home' && <HomeView />}
       {/* SAME AS WRITING: {this.state.view === 'home' ? <HomeView /> : null} */}
      </div>
    );
  }
}

export default App;

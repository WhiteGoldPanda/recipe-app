import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form";
const API_KEY = "bcbdcc5a8dc564349cb8681bf31738ff"
class App extends Component {
  getResipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=shredded%20chicken&count=10`);
    
    const data = await api_call.json();
    console.log(data.recipes); 
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
       <Form getResipe={this.getResipe} />
      </div>
    );
  }
}

export default App;


import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "satish", age: 31 },
      { name: "Namrata", age: 28 },
    ],
  };

  switchNameHandler = () => {
    //console.log("Wasw clicked");
    // don't do this this.state.persons[0].name = "Satish Chander";
    this.setState({
      persons: [
        { name: "satish chander", age: 31 },
        { name: "Namrata", age: 28 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I am react App</h1>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        >
          I like traveling
        </Person>
        <button onClick={this.switchNameHandler}>Switch Name</button>
      </div>
    );
  }
}

export default App;

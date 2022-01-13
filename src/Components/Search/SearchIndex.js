import React, { Component } from "react";
import { Input } from "reactstrap";

export default class SearchIndex extends Component {  //class component which is exported
  constructor(props) { //a method that stores the default values of state variable
    super(props); //super is a connecting theme from constructor to parent component(allowing the variables to be used anywhere)(makes it globally available)
    this.state = { //initializes setting state for variables
      searchObjects: [], //gets filled the results
      searchTerm: "", //gets the value of the search term
      things: [
        "pen",
        "marker",
        "eraser",
        "notebook",
        "pencil",
        "scissors",
        "highlighter",
        "stapler",
        "paper clip",
        "binder",
        "hole punch",
        "laminator",
        "laminating sheets",
        "protective sheets",
        "index cards",
      ],
    };
  }
  handleChange = (event) => {  //assigns the searchTerm variable the value of the search bar
    this.setState({ //sets the value of the input to the searchTerm variable
      searchTerm: event.target.value,
    }); //value is what we wrote in the input field, 
  };
  searchFunction = () => { //filters through the things and checks if it  matches the searchTerm
    // filters through state variable things, checks for matches to searchTerm, sets the matches to the value of the searchObject
    let searchObjects = this.state.things.filter((thing) =>
      thing.includes(this.state.searchTerm)
    );
    this.setState({ //reset state so it contains the matches
      searchObjects,
    });
  };
  render() {  //renders to the dom
    return (
      <div>
        {/* set searchTerm to the value on the input, call handleChange */}
        <Input placeholder="Search Here" type="text" value={this.state.searchTerm} onChange={this.handleChange}/>
        {/* button calls searchFunction onclick */}
        <button onClick={this.searchFunction}>Search</button>
        
        <h3>Results:</h3>
        <ul>
          {this.state.searchObjects.map((thing, index) => { //maps over searchObjects array and displays it
            return <li key={index}>{thing}</li>; //index is a param that can be used when using map method
          })}
        </ul>
      </div>
    );
  }
}

import React, { Component } from "react"; //importing react & component
import CatList from "./CatList"; //importing catlist component

export default class CatIndex extends Component { //declaring a class component
  constructor(props) {  //a method that stores the default values of state variable
    super(props); //super is a connecting theme from constructor to parent component(allowing the variables to be used anywhere)(makes it globally available)
    this.state = {  //initializes setting state for variables
      breeds: [
        "persian",
        "siamese",
        "maine coon",
        "ragdoll",
        "scottish fold",
        "sphynx",
        "british shorthair",
        "bengal",
        "american shorthair",
      ], //this whole array is a state variable
    };
  }

  render() { //renders to the dom
    return (
      <div>
        <CatList breeds={this.state.breeds} /> 
        {/* calling catlist component and sending properties  */}
      </div>
    );
  }
}

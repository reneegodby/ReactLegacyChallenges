import React, { Component } from "react";

export default class DogIndex extends Component {   //class component which we are exporting
  constructor(props) { //a method that stores the default values of state variable
    super(props); //super is a connecting theme from constructor to parent component(allowing the variables to be used anywhere)(makes it globally available)
    this.state = {//initializes setting state for variables
          dogPic: "", //state variable set as empty string
    };
  }

  getDogPic = () => {   //function
    fetch("https://dog.ceo/api/breeds/image/random") //api fetch
      .then(response => response.json()) //jsonifies results of fetch
      .then(data => { 
        this.setState({
          dogPic: data.message, //takes data and assigns to the variable's empty string
        });
      })
      .catch(error => console.log(error)); //catches error

  }; render () {
      return(
          <div>
          <h1>Dog Index</h1> 
          {/* onclick event to call getdogpic function/use 'this' key word to call function */}
          <button onClick={this.getDogPic}>Get Dog Pic</button>
          <hr/>
          <img src={this.state.dogPic} alt="dog"/>
          </div> 
          // using 'this.state' to call the state variable of dogPic
      )
  }
}

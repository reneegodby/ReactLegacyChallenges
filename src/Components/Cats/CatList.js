import React, { Component } from "react";

export default class CatList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.breeds.map((fluffbutt) => {  //this key word to dive into props breeds to map over each breed.
            return <li>{fluffbutt}</li>;
          })}
        </ul>
      </div>
    );
  }
}

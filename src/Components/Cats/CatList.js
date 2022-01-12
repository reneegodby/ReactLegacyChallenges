import React, { Component } from "react";
import CatIndex from "./CatIndex";

export default class CatList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.breeds.map((breed, index) => {
            return <li key={index}>{breed}</li>;
          })}
        </ul>
      </div>
    );
  }
}

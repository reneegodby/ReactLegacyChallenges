import React, { Component } from "react";

export default class TaskIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      tasks: [],
      completed: false,
    };
  }
  handleChange = (event) => {
    this.setState({
      task: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.task === "") {
      console.log("wrong");
    } else {
      this.setState({
        tasks: [...this.state.tasks, this.state.task],
        task: "",
      });
    }
  };
  handleComplete = (event) => {
    event.preventDefault();
    this.setState({
      completed: true,
    }).catch((error) => console.log(error));
  };
  render() {
    return (
      <div>
        <h1>To Do List</h1>
        <br />
        <form onSubmit={this.handleSubmit}>
          <label>
            Task:
            <input
              type="text"
              value={this.state.task}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Completed:
            <input
              type="checkbox"
              value={this.state.completed}
              onChange={this.handleCheck}
            />
          </label>

          <br />
          <label>
            <input type="submit" value="Submit" />
          </label>
        </form>
        <ul>
          {this.state.tasks.map((task, index) => (
            <li key={index}>
              {task}
              <input
                type="checkbox"
                value={this.state.completed}
                onChange={this.handleCheck}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

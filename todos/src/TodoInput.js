import React, { Component } from 'react';

import * as httpUtils from './Utils/HttpUtils';

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoTitle: '',
      todoComplete: 'false'
    };

    this.postData = this.postData.bind(this);
    this.handleInputTitle = this.handleInputTitle.bind(this);
    this.handleInputComplete = this.handleInputComplete.bind(this);
  }

  handleInputTitle(event) {
    this.setState({
      todoTitle: event.target.value
    });
  }

  handleInputComplete(event) {
    this.setState({
      todoComplete: event.target.value
    });
  }

  postData(event) {
    event.preventDefault();
    console.log(event);
    let data = {
      title: this.state.todoTitle,
      isComplete: this.state.todoComplete
    };
    httpUtils.post('http://localhost:8765/api/todos', data).then(response => {
      this.props.refresh();
    });
  }

  handleSubmit(event) {
    this.props.onAddTodo(this.state);
    this.setState({
      todoTitle: '',
      todoComplete: false
    });
  }

  render() {
    return (
      <div>
        <h4>Add new Todo</h4>
        <form className="form-horizontal" onSubmit={this.postData}>
          <div className="form-group">
            <label htmlFor="inputTodoTitle" className="col-sm-2 control-label">
              Todo
            </label>
            <div className="col-sm-10">
              <input
                name="todoTitle"
                type="text"
                className="form-control"
                id="inputTodoTitle"
                value={this.state.todoTitle}
                onChange={this.handleInputTitle}
                placeholder="Title"
              />
            </div>
          </div>
          <div className="form-group">
            <label
              htmlFor="inputTodoComplete"
              className="col-sm-2 control-label"
            >
              Complete
            </label>
            <div className="col-sm-10">
              <select
                name="todoComplete"
                className="form-control"
                id="inputTodoComplete"
                value={this.state.todoComplete}
                onChange={this.handleInputComplete}
              >
                <option>true</option>
                <option>false</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-success">
                Add Todo
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default TodoInput;

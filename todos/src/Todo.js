import Loader from 'react-loader';
import React, { Component } from 'react';

import * as httpUtils from './Utils/HttpUtils';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      loaded: false
    };
    this.getTodo = this.getTodo.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleCompleteTodo(index, todos) {
    let data = {
      title: todos[index].title,
      isComplete: todos[index].iscomplete === 'true' ? 'false' : 'true'
    };
    httpUtils
      .put('http://localhost:8765/api/todos/' + todos[index].id, data)
      .then(response => {
        this.getTodo();
      });
  }

  handleEdit(index, todos) {
    let data = {
      title: '',
      isComplete: todos[index].iscomplete
    };
    httpUtils
      .put('http://localhost:8765/api/todos' + todos[index].id, data)
      .then(response => {
        this.getTodo();
      });
  }

  handleRemoveTodo(index, todos) {
    httpUtils.remove('http://localhost:8765/api/todos/' + todos[index].id);
    this.setState({
      todos: this.state.todos.filter(function(e, i) {
        return i !== index;
      })
    });
  }

  handleAddTodo(todo) {
    this.setState({ todos: [...this.state.todos, todo] });
  }

  getTodo() {
    httpUtils.get('http://localhost:8765/api/todos/').then(response => {
      console.log(response);
      this.setState({
        todos: response.data.data,
        loaded: true
      });
    });
  }

  componentDidMount() {
    this.getTodo();
  }

  render() {
    return (
      <div className="container">
        <h4>
          Todo Count: <span className="badge">{this.state.todos.length}</span>
        </h4>
        <Loader loaded={this.state.loaded}>
          <ul className="list-group">
            {this.state.todos.map((todo, index) => (
              <li className="list-group-item" key={index}>
                <h4 className="list-group-item-heading">{todo.title}</h4>
                <p>
                  Completed:
                  <small>
                    <span className="label label-info">{todo.iscomplete}</span>
                  </small>
                </p>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={this.handleRemoveTodo.bind(
                    this,
                    index,
                    this.state.todos
                  )}
                >
                  <span className="glyphicon glyphicon-trash" />Delete
                </button>
                <button
                  className="btn btn-sm"
                  onClick={this.handleCompleteTodo.bind(
                    this,
                    index,
                    this.state.todos
                  )}
                >
                  {todo.iscomplete === 'true'
                    ? 'Mark as incomplete'
                    : 'Mark as complete'}
                </button>
              </li>
            ))}
          </ul>
        </Loader>
      </div>
    );
  }
}

export default Todo;

import './App.css';
import React, { Component } from 'react';

import Todo from './Todo';
import TodoInput from './TodoInput';

class App extends Component {
  render() {
    return (
      <div className="container">
        <TodoInput
          onAddTodo={this.handleAddTodo}
          refresh={() => this.refs.todo.getTodo()}
        />
        <Todo ref="todo" />
      </div>
    );
  }
}

export default App;

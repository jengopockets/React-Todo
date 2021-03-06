import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import SimpleStorage from "react-simple-storage";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      todo: ''
    };
  }

  updateInput(key, task) {
    this.setState({ [key]: task});
  }
  addTodo = x => {
    x.preventDefault();
    const newTodo = { task: this.state.todo, completed: false, id: Date.now() };
    this.setState({
      todos: [...this.state.todos, newTodo],
      todo: ''
    });
  };

  changeTodo = x => this.setState({ [x.target.name]: x.target.value});

  toggleTodoComplete = id => {
    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ todos });
  };

  clearCompletedTodos = x => {
    x.preventDefault();
    let todos = this.state.todos.filter(todo => !todo.completed);
    this.setState({ todos });
  };

  render() {
    return (
      <div className={`full`}>
        <SimpleStorage parent={this} />
        <TodoList handleToggleComplete={this.toggleTodoComplete} todos={this.state.todos} />
        <TodoForm value={this.state.todo} handleTodoChange={this.changeTodo} handleAddTodo={this.addTodo} handleClearTodos={this.clearCompletedTodos} />
      </div>
    );
  }
}




export default App;

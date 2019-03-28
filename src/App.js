import React, { Component } from 'react';
import { connect } from 'react-redux';
import {createStore} from 'redux';
import Todos from './Todos';
import AddTodos from './AddTodos';
import SignIn from './SignIn';
import actions from './actions'
import reducer from './store/reducer';

const store = createStore(reducer)
class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'write some code'},
      {id: 2, content: 'get a job'}
    ],
    signedIn: false,
    password: 'pass'
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    })
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }

  signIn = (password) => {
    if(password === this.state.password) {
      let signedIn = true;
      this.props.signIn({
        signedIn
      })
    }
  }
  render() {
    return (
      this.props.signedIn ? (
        <div className="todo-app container">
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
          <AddTodos addTodo={this.addTodo}/>
        </div>) : (<div className="todo-app container"><SignIn signIn={this.signIn}/></div>)
    );
  }
}

const mapStateToProps = state => {
  return { signedIn: state.signedIn }
};

export default connect(mapStateToProps, {
  signIn: actions.signIn
})(App);

import React, { Component } from 'react';
import './App.css';
import InputBox from './components/InputBox/InputBox';
import TodosList from './components/TodosList/TodosList';

class App extends Component {
  state = {
    counter: 0,
    todos: []
  }

  deleteTodo = (id) => {

    let updatedTodos = this.state.todos.filter(function (todoObj) {
      if (todoObj.id === id) {
        return false;
      }
      return true;
    });

    this.setState({
      todos: updatedTodos
    })
  }
 getUniqueId = () =>{
    /*
      returns a unique id and updates counter state for next call.
    */ 
  let id = this.state.counter;
   
   this.setState({
     counter: id+1
   })
   return id;
 }

  addTodo = (todoValue) => {
    // adding new todo using `todoValue`
    let updateTodoList = [...this.state.todos, { id: this.getUniqueId(), todoValue: todoValue }];
    this.setState({
      todos: updateTodoList
    })

  }
  render() {
    return (
      <div className='App'>
        <InputBox addTodo={this.addTodo}></InputBox>
        <TodosList todos={this.state.todos} deleteTodo={this.deleteTodo} ></TodosList>
      </div>
    );
  }
}

export default App;

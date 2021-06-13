import React, { Component } from 'react';
import './App.css';
import InputBox from './components/InputBox/InputBox';
import TodosList from './components/TodosList/TodosList';

class App extends Component {
  state = {
    todos: [
      { id: 1, todoValue: "this is todo 1" },
      { id: 2, todoValue: "this is todo 2" },
      { id: 3, todoValue: "this is todo 3" }
    ]
  }

  deleteTodo = (id) =>{
    
      let updatedTodos = this.state.todos.filter(function(todoObj){
        if(todoObj.id === id){
          return false;
        }
        return true;
      });

      this.setState({
        todos: updatedTodos
      })
  }

  render() {
    return (
      <div className='App'>
        <InputBox></InputBox>
        <TodosList todos={this.state.todos} deleteTodo={this.deleteTodo}></TodosList>
      </div>
    );
  }
}

export default App;

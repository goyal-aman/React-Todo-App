import React, { Component } from 'react';
import './App.css';
import InputBox from './components/InputBox/InputBox';
import TodosList from './components/TodosList/TodosList';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div className='App'>
        <InputBox></InputBox>
        <TodosList></TodosList>
      </div>
     );
  }
}
 
export default App;

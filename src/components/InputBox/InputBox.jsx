import React, { Component } from 'react';

class InputBox extends Component {
    state = {
        value: ""
    }
    handleChange = (e)=>{

        // updating state of input box.
        this.setState({
            value : e.target.value
        })
    }

    keyDown = (e)=>{
        console.log("inside keyDown method")
        if(e.key === 'Enter'){
            this.addTodo();
        }
    }

    addTodo = () =>{
        /*
            firing add todo method defined in app component
            to add new todo.
        */
       let addTodoMethod = this.props.addTodo;
       addTodoMethod(this.state.value);

       // reset input value after adding todo
       this.setState({
           value:""
       })
    }
    render (){
        return (
            <div className="input-box container input-group mt-4">
                <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange} onKeyDown={this.keyDown}></input>
                <button className='btn btn-primary' onClick={this.addTodo}  >Add Todo</button>
            </div>
        );
    }
}

export default InputBox;
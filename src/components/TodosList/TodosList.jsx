import React, { Component } from 'react';

class TodosList extends Component {
    render() {
        // let todos = this.state.todos;
        let todos = this.props.todos;
        let deleteTodo = this.props.deleteTodo;
        return (
            <div className='todos container'>
                {todos.map(function (todoObj) {
                    return (
                        <div key={todoObj.id} className="todo input-group m-4">
                            <div className="form-control">{todoObj.todoValue}</div>
                            <button className="btn btn-danger" onClick={()=>deleteTodo(todoObj.id)}>Delete</button>
                        </div>
                    )
                })
                }
            </div>
        );
    }
}

export default TodosList;
import React, { Component } from 'react';
import TodoServices from '../Services/TodoServices';
import './todo.css'

class AddTodo extends Component {
    state = {
        defaultValue: "",
        value: this.props.addTodoValue
    }

    handleChange = (e) => {
        
        this.setState({
            value:e.target.value
        });
    }

    clearInput = () => {
        
        document.getElementById("todoValue").value = "";
    
        this.setState({value:""});
    }

    addTodo = () => {
        this.props.fooAddTodo(this.state.value);
        this.clearInput();
        let a={
            value : this.state.value,
            isDone : false 
        }
        TodoServices.savetodo(a).then((res)=>{
            console.log(res)
        })
    }

    render() {
        return (
            <div className="input-group mb-3">
                <input  type="text" className="form-control input_Todo" id="todoValue" placeholder="Enter ToDo" onChange={this.handleChange} />
                <div className="input-group-append">
                    <button onClick={this.addTodo} className="btn btn-outline-secondary" type="button" id="button-addon2">Add New ToDo</button>
                </div>
            </div>
        );
    }
}

export default AddTodo;
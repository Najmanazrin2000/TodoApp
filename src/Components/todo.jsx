import React, { Component } from 'react';
import { MdDelete } from 'react-icons/md';
import { TiTick} from 'react-icons/ti';
import './todo.css'



class Todo extends Component {
  

    render() {
        return (
            <>
                <td style={{ width: 10 }} className="text-center">
                    {this.props.index}
                </td>
                <td style={{ width: 15 }} className="text-center">
                    <input  type="checkbox" defaultChecked={this.props.todo.isDone}  onChange={() => this.props.fooDoneDone(this.props.todo)} />
                </td>
                <td>
                    {
                        this.renderTodo()
                    }
                </td>
                <td style={{ width: 100 }} className="text-center">
                   
                    <MdDelete className="todoDelete" onClick={() => this.props.fooDelete(this.props.todo.id)} size={20}/>
                   
                    {/* <button onClick={() => this.props.fooDelete(this.props.todo.id)} className="btn btn-danger btn-sm"></button> */}
                </td>
            </>
        );
    }

    renderTodo(){
        if(this.props.todo.isDone)
        return <s>{this.props.todo.value}</s>;
        else
        return this.props.todo.value;
    }

}

export default Todo;
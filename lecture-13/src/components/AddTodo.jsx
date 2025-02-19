import React, { PureComponent } from 'react'

class AddTodo extends PureComponent {
    render() {
        console.log('render from AddTodo');
        return (
            <div className="add-todo">
                <div className="new-todo">
                    <i className="fa-solid fa-xmark" onClick={this.props.closeModal}></i>
                    <i className="fa-regular fa-circle-check" onClick={this.props.addTodo}></i>
                    <i className="fa-regular fa-pen-to-square"></i>
                    <input type="text" placeholder="Todo Title" id="todo-title"/>
                    <textarea name="" id="todo-description" placeholder="Type your Todo description here. . ."></textarea>
                </div>
            </div>
        )
    }
}

export default AddTodo
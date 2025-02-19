import React, { Component } from 'react'

class Todo extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return !(
            this.props.id === nextProps.id &&
            this.props.title === nextProps.title &&
            this.props.description === nextProps.description
        )
    }
    render() {
        const { id, title, description, editTodo, completeTodo, isCompleted, restoreTodo, deleteTodo } = this.props
        console.log('render from Todo');
        return (
            <div className="task">
                <h3> {title} id: {id} </h3>
                <p> {description} </p>
                <div className="task-buttons">
                    <button title={isCompleted ? 'Restore' : 'Update'}
                        onClick={isCompleted ?
                            () => restoreTodo(id, title, description) :
                            () => editTodo(id, title, description)}>
                        {isCompleted ?
                            <i className="fa-solid fa-arrow-rotate-left"></i> :
                            <i className="fa-regular fa-pen-to-square"></i>}
                    </button>
                    <button title={isCompleted ? 'Delete' : 'Done'}
                        onClick={isCompleted ?
                            () => deleteTodo(id, title, description) :
                            () => completeTodo(id, title, description)}>
                        {isCompleted ?
                            <i className="fa-regular fa-trash-can"></i> :
                            <i className="fa-regular fa-circle-check"></i>}
                    </button>
                </div>
            </div>
        )
    }
}

export default Todo



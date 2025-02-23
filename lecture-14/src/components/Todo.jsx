import React from 'react'

const Todo = ({ id, title, description, isCompleted, editTodo, completeTodo, restoreTodo, deleteTodo }) => {
    console.log('render from Todo - ' + id, title);
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

export default React.memo(Todo)



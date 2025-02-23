import React from 'react'

const AddTodo = ({addTodoDivRef,inputRef, textareaRef, circleIconRef, editIconRef, closeModal, addTodo}) => {
    return (
        <div className="add-todo" ref={addTodoDivRef}>
            <div className="new-todo">
                <i className="fa-solid fa-xmark" onClick={closeModal}></i>
                <i className="fa-regular fa-circle-check" ref={circleIconRef} onClick={addTodo}></i>
                <i className="fa-regular fa-pen-to-square" ref={editIconRef}></i>
                <input type="text" autoComplete="off" placeholder="Todo Title" id="todo-title" ref={inputRef}/>
                <textarea name="" id="todo-description" placeholder="Type your Todo description here. . ." ref={textareaRef}></textarea>
            </div>
        </div>
    )
}

export default AddTodo
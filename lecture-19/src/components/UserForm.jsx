
const UserForm = ({onSubmit, navigate, inputRef, textareaRef}) => {
  return (
    (
        <div className="add-todo" >
            <div className="new-todo">
                <i className="fa-solid fa-xmark" title='Close' onClick={() => navigate('/')}></i>
                <i className="fa-regular fa-circle-check" title='Save' onClick={onSubmit}></i>
                {/* <i className="fa-regular fa-pen-to-square" ></i> */}
                <input type="text" autoComplete="off" placeholder="Todo Title" id="todo-title" ref={inputRef} />
                <textarea name="" id="todo-description" placeholder="Type your Todo description here. . ."
                    ref={textareaRef}></textarea>
            </div>
        </div>
    )
  )
}

export default UserForm
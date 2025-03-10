import { useRef } from "react"


const AddEditTodo = ({ dispatch, newTodo }) => {
    const inputRef = useRef(null)
    const textareaRef = useRef(null)

    const handleInputs = () => {
        const title = inputRef.current.value.trim()
        const body = textareaRef.current.value.trim()

        if (title === '' && body === '') {
            return alert('Type something.')
        } else {
            return newTodo(title, body)
        }
    }

    console.log('Edit Todo Component');
    
    return (
        <div className="add-todo" >
            <div className="new-todo">
                <i className="fa-solid fa-xmark" title='Close' onClick={() => dispatch({ type: 'close-modal' })}></i>
                <i className="fa-regular fa-circle-check" title='Save' onClick={handleInputs}></i>
                {/* <i className="fa-regular fa-pen-to-square" ></i> */}
                <input type="text" autoComplete="off" placeholder="Todo Title" id="todo-title" ref={inputRef} />
                <textarea name="" id="todo-description" placeholder="Type your Todo description here. . ."
                    ref={textareaRef}></textarea>
            </div>
        </div>
    )
}

export default AddEditTodo
import React, { useState } from 'react'
import { Link } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { addTodoAction } from '../store/todo/todo.actions'

const CreateTodo = () => {
    const [inputValue, setInputValue] = useState('')
    const [status] = useState('Active')
    const { todos } = useSelector((state) => state.todo)
    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()

        const todo = {
            id: todos.length + 1,
            body: inputValue,
            status
        }

        dispatch(addTodoAction(todo))
        setInputValue('')
    }

    return (
        <div>
            <h3>Create Todo Page</h3>

            <form className="inputs" onSubmit={onSubmit}>
                <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button>Add Todo</button>
            </form>
            <br />
            <Link to='/'>or go to actives</Link>
        </div>
    )
}

export default CreateTodo
import React, { useEffect, useReducer } from 'react'
import Todo from './Todo'
import AddEditTodo from './AddEditTodo'

const API_KEY = 'eLP6jY3wlkGWM-88P7Wfi613vNTEYsB1yQ8hn-8E6v8EKG8etA'
const URL = '/api/v1/todos'

const initialState = {
    isOpenModal: false,
    completedTodos: [],
    activeTodos: []
}

const reduce = (currentState, action) => {
    switch (action.type) {
        case 'open-modal':
            return { ...currentState, isOpenModal: true }
        case 'close-modal':
            return { ...currentState, isOpenModal: false }
        case 'new-todo':
            return {
                ...currentState,
                isOpenModal: false,
                activeTodos: [...currentState.activeTodos, action.payload.items[0]]
            }
        case 'set-todos':
            return {
                ...currentState,
                activeTodos: action.payload.activeTodos,
                completedTodos: action.payload.completedTodos
            }
        case 'complete-todo':
            return
        default:
            throw new Error('Unknown action type.')
    }
}


const TodoList = () => {
    const [state, dispatch] = useReducer(reduce, initialState)

    const loadTodos = async () => {
        try {
            const response = await fetch(URL, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${API_KEY}`
                }
            })

            const result = await response.json()
            const activeTodos = result.items.filter((todo) => !todo.isCompleted)
            const completedTodos = result.items.filter((todo) => todo.isCompleted)

            dispatch({
                type: 'set-todos',
                payload: { activeTodos, completedTodos }
            })

        } catch (error) {
            console.error('Error:', error)
        }
    }

    useEffect(() => {
        loadTodos()
    }, [])

    const newTodo = async (title, body) => {
        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${API_KEY}`
                },
                body: JSON.stringify([{
                    title: title,
                    body: body,
                    isCompleted: false
                }])
            })

            if (!response.ok) throw new Error('Failed to create new todo')

            const newTodoData = await response.json()

            dispatch({ type: 'new-todo', payload: newTodoData })

        } catch (error) {
            console.error('Error:', error)
        }
    }

    console.log('Todo List Component');

    return (
        <div className="wrapper">
            {state.isOpenModal ? <AddEditTodo dispatch={dispatch} newTodo={newTodo} /> : null}
            <div className="active-tasks">
                <h2>active tasks</h2>
                <div className="add-new">
                    <button onClick={() => dispatch({ type: 'open-modal' })}>
                        <span>add new task</span>
                        <i className="fa-regular fa-paper-plane"></i>
                    </button>
                </div>
                <div className="tasks">
                    {state.activeTodos.length > 0 ? (
                        state.activeTodos.map(todo => <Todo
                            key={todo._uuid}
                            isCompleted={todo.isCompleted}
                            id={todo._uuid}
                            body={todo.body}
                            title={todo.title}
                            created={todo._created} />)
                    ) : (
                        <p>No active tasks.</p>
                    )}
                </div>
            </div>
            <div className="completed-tasks">
                <h2>completed tasks</h2>
                <div className="completed-notation">
                    <p>Delete or restore tasks</p>
                    <i className="fa-regular fa-rectangle-list"></i>
                </div>
                <div className="tasks">
                </div>
            </div>
        </div>
    )
}

export default TodoList
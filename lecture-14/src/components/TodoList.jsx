import React, { useCallback, useRef, useState } from 'react'
import Todo from './Todo'
import AddTodo from './AddTodo'

const TodoList = () => {
    const [todos, setTodos] = useState([
        { id: 1, title: 'go shopping', description: 'Tomorrow I have to go to buy new a shirt.' },
        { id: 2, title: 'card parts', description: 'Call Jack to ask him about new details' },
        { id: 3, title: 'meet with kate', description: 'Date with Kate' },
    ])
    const [completed, setCompleted] = useState([])
    const [idCounter, setIdCounter] = useState(3)

    const addTodoDivRef = useRef(null)
    const inputRef = useRef(null)
    const textareaRef = useRef(null)
    const circleIconRef = useRef(null)
    const editIconRef = useRef(null)

    const openModal = useCallback(() => {
        addTodoDivRef.current.style.display = 'flex';
        circleIconRef.current.style.display = 'block'
        editIconRef.current.style.display = 'none'
        inputRef.current.value = ''
        textareaRef.current.value = ''
    }, [])

    const closeModal = useCallback(() => {
        circleIconRef.current.style.display = 'none'
        editIconRef.current.style.display = 'none'
        addTodoDivRef.current.style.display = 'none'
    }, [])

    const addTodo = useCallback( () => {
        if (inputRef.current.value === '' && textareaRef.current.value === '')
            return alert('Fill the title or body !')

        setIdCounter((prevState) => {
            const newId = prevState + 1
            const newTodo = {
                id: newId,
                title: inputRef.current.value,
                description: textareaRef.current.value
            }
            setTodos((prevTodos) => [...prevTodos, newTodo])

            return newId
        })

        closeModal()

    },[closeModal])

    const editTodo = useCallback((id, title, description) => {
        addTodoDivRef.current.style.display = 'flex'
        editIconRef.current.style.display = 'block'

        inputRef.current.value = title
        textareaRef.current.value = description

        editIconRef.current.onclick = () => {
            const editedTodo = {
                id: id,
                title: inputRef.current.value,
                description: textareaRef.current.value
            }

            setTodos((prevState) => prevState.map((todo) => todo.id === id ? editedTodo : todo))
            closeModal()
        }
    }, [closeModal])

    const completeTodo = useCallback((id) => {
        const todoItem = todos.find((todo) => todo.id === id)

        setCompleted((prevState) => [...prevState, todoItem])
        setTodos((prevState) => prevState.filter((todo) => todo.id !== id))
    }, [todos])

    const restoreTodo = useCallback((id) => {
        const todoItem = completed.find((todo) => todo.id === id)

        setTodos((prevState) => [...prevState, todoItem])
        setCompleted((prevState) => prevState.filter((todo) => todo.id !== id))
    }, [completed])

    const deleteTodo = useCallback((id) => {
        setCompleted((prevState) => prevState.filter((todo) => todo.id !== id))
    }, [])

    console.log('render from TodoList');
    return (
        <div className="wrapper">
            <AddTodo
                addTodo={addTodo}
                closeModal={closeModal}
                addTodoDivRef={addTodoDivRef}
                inputRef={inputRef}
                textareaRef={textareaRef}
                circleIconRef={circleIconRef}
                editIconRef={editIconRef}
            />
            <div className="active-tasks">
                <h2>active tasks</h2>
                <div className="add-new">
                    <button onClick={openModal}>
                        <span>add new task</span>
                        <i className="fa-regular fa-paper-plane"></i>
                    </button>
                </div>
                <div className="tasks">
                    {todos.map((todo) => (
                        <Todo
                            key={todo.id}
                            id={todo.id}
                            title={todo.title}
                            description={todo.description}
                            editTodo={editTodo}
                            completeTodo={completeTodo}
                            isCompleted={false} />
                    ))
                    }
                </div>
            </div>
            <div className="completed-tasks">
                <h2>completed tasks</h2>
                <div className="completed-notation">
                    <p>you can delete or restore tasks from here</p>
                    <i className="fa-regular fa-rectangle-list"></i>
                </div>
                <div className="tasks">
                    {completed.length > 0 &&
                        completed.map((todo) => (
                            <Todo
                                key={todo.id}
                                id={todo.id}
                                title={todo.title}
                                description={todo.description}
                                isCompleted={true}
                                restoreTodo={restoreTodo}
                                deleteTodo={deleteTodo}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default TodoList
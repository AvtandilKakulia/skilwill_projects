import React, { useEffect, useReducer } from 'react'
import Todo from './Todo'
import useFetch from '../hooks/useFetch'
import { useNavigate } from 'react-router'
import { languageDictionary, useLanguageContext } from '../contexts/LanguageContex'

const initialState = {
    completedTodos: [],
    activeTodos: []
}

const reduce = (currentState, action) => {
    switch (action.type) {
        case 'new-todo':
            return {
                ...currentState,
                activeTodos: [...currentState.activeTodos, action.payload.items[0]]
            }
        case 'set-todos':
            return {
                ...currentState,
                activeTodos: action.payload.activeTodos,
                completedTodos: action.payload.completedTodos
            }
        case 'complete-todo':
            const completedTodo = currentState.activeTodos.find(todo => todo._uuid === action.payload.id);
            if (!completedTodo) return currentState;

            const updatedActiveTodos = currentState.activeTodos.filter(todo => todo._uuid !== action.payload.id);
            const updatedCompletedTodos = [...currentState.completedTodos, { ...completedTodo, isCompleted: true }];

            return {
                ...currentState,
                activeTodos: updatedActiveTodos,
                completedTodos: updatedCompletedTodos
            };
        case 'remove-todo':
            const updActiveTodos = currentState.activeTodos.filter(todo => todo._uuid !== action.payload.id);
            const updCompletedTodos = currentState.completedTodos.filter(todo => todo._uuid !== action.payload.id);

            return {
                ...currentState,
                activeTodos: updActiveTodos,
                completedTodos: updCompletedTodos
            }
        case 'restore-todo':
            const restoredTodo = currentState.completedTodos.find(todo => todo._uuid === action.payload.id);
            if (!restoredTodo) return currentState;

            const completedTodos = currentState.completedTodos.filter(todo => todo._uuid !== action.payload.id);
            const activeTodos = [...currentState.activeTodos, { ...restoredTodo, isCompleted: false }];

            return {
                ...currentState,
                activeTodos: activeTodos,
                completedTodos: completedTodos
            };

        default:
            throw new Error('Unknown action type.')
    }
}


const TodoList = () => {
    const [state, dispatch] = useReducer(reduce, initialState)
    const { loading, data, error } = useFetch({ url: '/api/v1/todos', method: 'GET' })
    const navigate = useNavigate()
    const { lang } = useLanguageContext()

    useEffect(() => {
        if (data) {
            const activeTodos = data.items.filter((todo) => !todo.isCompleted)
            const completedTodos = data.items.filter((todo) => todo.isCompleted)
            dispatch({
                type: 'set-todos',
                payload: { activeTodos, completedTodos }
            })
        }
    }, [data])

    if (loading) return <div><i className="fa-solid fa-spinner spinner"></i></div>
    if (error) return <div>Error: {error}</div>

    return (
        <div className="wrapper">
            <div className="active-tasks">
                <h2>{languageDictionary[lang].active_tasks}</h2>
                <div className="add-new">
                    <button onClick={() => navigate('/add')}>
                        <span>{languageDictionary[lang].add_new}</span>
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
                            created={todo._created}
                            dispatch={dispatch} />)
                    ) : (
                        <p>{languageDictionary[lang].no_active}</p>
                    )}
                </div>
            </div>
            <div className="completed-tasks">
                <h2>{languageDictionary[lang].completed_tasks}</h2>
                <div className="completed-notation">
                    <p>{languageDictionary[lang].ROD}</p>
                    <i className="fa-regular fa-rectangle-list"></i>
                </div>
                <div className="tasks">
                    {state.completedTodos.length > 0 ? (
                        state.completedTodos.map(todo => <Todo
                            key={todo._uuid}
                            isCompleted={todo.isCompleted}
                            id={todo._uuid}
                            body={todo.body}
                            title={todo.title}
                            created={todo._created}
                            dispatch={dispatch} />)
                    ) : (
                        <p>{languageDictionary[lang].no_completed}</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default TodoList
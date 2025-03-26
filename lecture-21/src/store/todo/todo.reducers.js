const initialState = {
    todos: []
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                todos: [...state.todos, action.payload]
            }
        case 'REMOVE_TODO':
            return {
                todos: state.todos.filter((item) => item.id !== action.payload)
            }
        case 'CHANGE_TODO_STATUS':
            return {
                todos: state.todos.map((item) => item.id === action.payload ? { ...item, status: 'Done' } : item)
            }
        default:
            return state
    }
}
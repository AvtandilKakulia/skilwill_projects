
export const addTodoAction = (payload) => ({
    type: 'ADD_TODO',
    payload
})

export const deleteTodoAction = (payload) => ({
    type: 'REMOVE_TODO',
    payload
})

export const changeStatusAction = (payload) => ({
    type: 'CHANGE_TODO_STATUS',
    payload
})
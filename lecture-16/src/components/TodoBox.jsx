import React, { useEffect, useRef, useState } from 'react'
import { TodoBoxDiv, TaskBox, TaskHeader, TaskCounter, TaskHeaderDevider, AddTodoDiv } from '../styled'
import TodoComponent from './TodoComponent'
import CreateTodo from './CreateTodo'

const TodoBox = () => {
    const createTodoDivRef = useRef(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [todos, setTodos] = useState([])

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    console.log('TodoBox');

    const fillTodosArr = () => {
        const local = localStorage
        const todosArr = []

        for (const each in local) {
            if (each.startsWith('todo-')) {
                todosArr.push(JSON.parse(local[each]))
            }
        }
        todosArr.sort((a, b) => a.id - b.id)
        setTodos(todosArr)
    }

    const addTodo = (newTodo) => {

        const updatedTodos = [...todos, newTodo]
        setTodos(updatedTodos)

        localStorage.setItem(`todo-${newTodo.id}`, JSON.stringify(newTodo))
    }

    const moveBetween = (todoId, status) => {
        const todo = todos.filter((todo) => todo.id === todoId)
        const index = todos.findIndex((todo) => todo.id === todoId)
        todos.splice(index, 1)
        const todoObj = todo[0]
        todoObj.status = status
        const updatedTodos = [...todos, todoObj]

        setTodos(updatedTodos)

        for (const key in localStorage) {
            if (key.startsWith('todo-')) {
                if (todoId === JSON.parse(localStorage[key]).id) {
                    localStorage.setItem(key, JSON.stringify(todoObj))
                }

            }
        }
    }

    const closeTodo = (todoId) => {
        const index = todos.findIndex((todo) => todo.id === todoId)
        todos.splice(index, 1)
        const updatedTodos = [...todos]
        setTodos(updatedTodos)

        for (const key in localStorage) {
            if (key.startsWith('todo-')) {
                if (todoId === JSON.parse(localStorage[key]).id) {
                    localStorage.removeItem(key)
                }

            }
        }
    }

    const fromActiveToProgress = (todoId) => {
        moveBetween(todoId, 'in-progress')
    }

    const fromActiveToDone = (todoId) => {
        moveBetween(todoId, 'done')
    }

    const fromProgressToActive = (todoId) => {
        moveBetween(todoId, 'active')
    }

    const fromDoneToActive = (todoId) => {
        moveBetween(todoId, 'active')
    }

    const taskCounter = (status) => {
        return todos.filter((todo) => todo.status === status).length
    }


    useEffect(() => {
        fillTodosArr()
    }, [])

    return (
        <TodoBoxDiv >
            <CreateTodo
                ref={createTodoDivRef}
                isOpen={isModalOpen}
                closeModal={closeModal}
                addTodo={addTodo}
            />
            <TaskBox>
                <TaskHeader>active todos</TaskHeader>
                <TaskCounter>{taskCounter('active')}</TaskCounter>
                <TaskHeaderDevider color={'red'}></TaskHeaderDevider>
                {todos.filter((todo) => todo.status === 'active').map((todoObj) =>
                    <TodoComponent
                        key={todoObj.id}
                        id={todoObj.id}
                        content={todoObj.content}
                        todoColor={todoObj.color}
                        todoStatus={todoObj.status}
                        fromActiveToProgress={fromActiveToProgress}
                        fromActiveToDone={fromActiveToDone}
                        closeTodo={closeTodo}
                    />)}
                <AddTodoDiv>
                    <i onClick={openModal} className="fa-solid fa-plus"></i>
                </AddTodoDiv>
            </TaskBox>
            <TaskBox>
                <TaskHeader>in progress</TaskHeader>
                <TaskCounter>{taskCounter('in-progress')}</TaskCounter>
                <TaskHeaderDevider color={'blue'}></TaskHeaderDevider>
                {todos.filter((todo) => todo.status === 'in-progress').map((todoObj) =>
                    <TodoComponent
                        key={todoObj.id}
                        id={todoObj.id}
                        content={todoObj.content}
                        todoColor={todoObj.color}
                        todoStatus={todoObj.status}
                        fromProgressToActive={fromProgressToActive}
                        fromActiveToDone={fromActiveToDone}
                        closeTodo={closeTodo}
                    />)}
            </TaskBox>
            <TaskBox>
                <TaskHeader>done</TaskHeader>
                <TaskCounter>{taskCounter('done')}</TaskCounter>
                <TaskHeaderDevider color={'yellowgreen'}></TaskHeaderDevider>
                {todos.filter((todo) => todo.status === 'done').map((todoObj) =>
                    <TodoComponent
                        key={todoObj.id}
                        id={todoObj.id}
                        content={todoObj.content}
                        todoColor={todoObj.color}
                        todoStatus={todoObj.status}
                        fromDoneToActive={fromDoneToActive}
                        closeTodo={closeTodo}
                    />)}
            </TaskBox>
        </TodoBoxDiv>
    )
}

export default TodoBox
import React, { Component } from 'react'
import Todo from './Todo'
import AddTodo from './AddTodo'

class TodoList extends Component {
    state = {
        todos: [
            { id: 1, title: 'go shopping', description: 'Tomorrow I have to go to buy new a shirt.' },
            { id: 2, title: 'card parts', description: 'Call Jack to ask him about new details' },
            { id: 3, title: 'meet with kate', description: 'Date with Kate' },
        ],
        completed: [],
        idCounter: 3
    }

    openModal = () => {
        const addTodoDiv = document.querySelector('.add-todo')
        addTodoDiv.style.display = 'flex'

        const input = document.querySelector('.new-todo input')
        const textarea = document.querySelector('.new-todo textarea')

        input.value = ''
        textarea.value = ''

        const circleIcon = document.querySelector('.new-todo .fa-circle-check')
        circleIcon.style.display = 'block'
        const editIcon = document.querySelector('.new-todo .fa-pen-to-square')
        editIcon.style.display = 'none'
    }

    closeModal = () => {
        const addTodoDiv = document.querySelector('.add-todo');
        const circleIcon = document.querySelector('.new-todo .fa-circle-check')
        const editIcon = document.querySelector('.new-todo .fa-pen-to-square')
        circleIcon.style.display = 'none'
        editIcon.style.display = 'none'
        addTodoDiv.style.display = 'none'

    }

    addTodo = () => {
        const input = document.querySelector('.new-todo input')
        const textarea = document.querySelector('.new-todo textarea')

        if (input.value === '' && textarea.value === '') return alert('Fill the title or body !')


        const id = this.state.idCounter + 1
        const newTodo = { id: id, title: input.value, description: textarea.value }
        this.setState({
            todos: [...this.state.todos, newTodo],
            idCounter: id
        })

        this.closeModal()

        input.value = ''
        textarea.value = ''
    }

    editTodo = (id, title, description) => {
        const addTodoDiv = document.querySelector('.add-todo');
        addTodoDiv.style.display = 'flex'

        const editIcon = document.querySelector('.new-todo .fa-pen-to-square')
        editIcon.style.display = 'block'

        const input = document.querySelector('.new-todo input')
        const textarea = document.querySelector('.new-todo textarea')

        input.value = title
        textarea.value = description

        editIcon.onclick = () => {
            const editedTodo = {
                id: id,
                title: input.value,
                description: textarea.value
            }

            const updatedTodos = this.state.todos.map((todo) => todo.id === id ? editedTodo : todo)
            this.setState({ todos: updatedTodos })
            this.closeModal()
        }

    }

    completeTodo = (id) => {
        const todoItem = this.state.todos.find((todo) => todo.id === id)
        const updatedTodos = this.state.todos.filter((todo) => todo.id !== id)

        this.setState(prevState => ({
            completed: [...prevState.completed, todoItem],
            todos: updatedTodos
        }))
    }

    restoreTodo = (id) => {
        const todoItem = this.state.completed.find((todo) => todo.id === id)
        const updatedCompleted = this.state.completed.filter((todo) => todo.id !== id)

        this.setState(prevState => ({
            todos: [...prevState.todos, todoItem],
            completed: updatedCompleted
        }))
    }

    deleteTodo = (id) => {
        const updatedCompleted = this.state.completed.filter((todo) => todo.id !== id)

        this.setState({
            completed: updatedCompleted
        })
    }


    render() {
        return (
            <div className="wrapper">
                <AddTodo addTodo={this.addTodo} closeModal={this.closeModal} />
                <div className="active-tasks">
                    <h2>active tasks</h2>
                    <div className="add-new">
                        <button onClick={this.openModal}>
                            <span>add new task</span>
                            <i className="fa-regular fa-paper-plane"></i>
                        </button>
                    </div>
                    <div className="tasks">
                        {this.state.todos.map((todo) => (
                            <Todo key={todo.id} id={todo.id} title={todo.title} description={todo.description} editTodo={this.editTodo} completeTodo={this.completeTodo} isCompleted={false} />
                        ))}
                    </div>
                </div>
                <div className="completed-tasks">
                    <h2>completed tasks</h2>
                    <div className="completed-notation">
                        <p>you can delete or restore tasks from here</p>
                        <i className="fa-regular fa-rectangle-list"></i>
                    </div>
                    <div className="tasks">
                        {this.state.completed.length > 0 ?
                            this.state.completed.map((todo) => (
                                <Todo key={todo.id} id={todo.id} title={todo.title} description={todo.description} isCompleted={true} restoreTodo={this.restoreTodo} deleteTodo={this.deleteTodo} />
                            )) : ''
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default TodoList
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router'
import Todo from '../components/Todo'
import styles from '../styles/activeTodos.module.css'

const ActiveTodos = () => {
    const { todos } = useSelector((state) => state.todo)

    return (
        <div className={styles.todo}>
            <h3>Active Todo Page</h3>
            <Link to='/create' >Go to Create</Link> &nbsp;&nbsp;
            <Link to='/done' >Go to Done List</Link> 

            <div>
                {
                    todos.filter((item) => item.status !== 'Done')
                        .map((item) => <Todo key={item.id} id={item.id} status={item.status} body={item.body} />)
                }
            </div>
        </div>
    )
}

export default ActiveTodos
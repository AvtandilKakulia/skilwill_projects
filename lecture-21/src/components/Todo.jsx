import { useDispatch } from 'react-redux'
import styles from '../styles/todo.module.css'
import { changeStatusAction, deleteTodoAction } from '../store/todo/todo.actions'

const Todo = ({ id, status, body }) => {
    const dispatch = useDispatch()

    const removeTodo = () => {
        dispatch(deleteTodoAction(id))
    }

    const changeStatus = () => {
        dispatch(changeStatusAction(id))
    }

    return (
        <div className={styles.todoWrapper}>
            <div className={styles.todoHead}>
                <span>ID: {id}</span>
                <p className={styles.todoStatus}>status: <span>{status}</span></p>
            </div>
            <p className={styles.todoBody}>{body}</p>
            <div style={{ marginTop: '5px' }}>
                <button style={{ cursor: 'pointer', marginRight: '5px' }} onClick={removeTodo}>Delete</button>
                <button style={{ cursor: 'pointer' }} onClick={changeStatus}>Done</button>
            </div>
        </div>
    )
}

export default Todo
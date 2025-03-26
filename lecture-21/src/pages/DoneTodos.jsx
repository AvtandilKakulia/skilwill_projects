import { useSelector } from 'react-redux'
import styles from '../styles/activeTodos.module.css'
import { Link } from 'react-router'
import Todo from '../components/Todo'

const DoneTodos = () => {
    const { todos } = useSelector((state) => state.todo)

    return (
        <div className={styles.todo}>
            <h3>Done Todo Page</h3>
            <Link to='/create' >Go to Create</Link>&nbsp;&nbsp;
            <Link to='/' >Go to Active Todos</Link>

            <div>
                {
                    todos.filter((item) => item.status === 'Done')
                        .map((item) => <Todo key={item.id} id={item.id} status={item.status} body={item.body} />)
                }
            </div>
        </div>
    )
}

export default DoneTodos
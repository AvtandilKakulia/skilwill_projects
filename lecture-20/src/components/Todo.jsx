import { memo } from "react";
import useRequest from "../hooks/useRequest";
import { useNavigate } from "react-router";


const Todo = ({ isCompleted, id, body, title, created, dispatch }) => {
    const { sendRequest } = useRequest({ url: '/api/v1/todos', method: 'PUT' })
    const { sendRequest: sendDeleteRequest } = useRequest({ url: '/api/v1/todos', method: 'DELETE' });
    const navigate = useNavigate()

    const milliseconds = new Date(created * 1000)
    const formattedDate = new Intl.DateTimeFormat('ka-GE', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    }).format(milliseconds);
    const [day, month, year] = formattedDate.split('/')
    const customFormattedDate = `${day}.${month}.${year}`

    const markCompleted = async () => {
        await sendRequest([{ "_uuid": id, "isCompleted": true }])
        dispatch({
            type: 'complete-todo',
            payload: { id }
        })
    }

    const restore = async () => {
        await sendRequest([{ "_uuid": id, "isCompleted": false }])
        dispatch({
            type: 'restore-todo',
            payload: { id }
        })
    }

    const remove = async () => {
        await sendDeleteRequest([{ "_uuid": id }])
        dispatch({
            type: 'remove-todo',
            payload: { id } 
        })
    }

    const handleNavigate = () => {
        navigate(`/update/${id}`)
    }

    return (
        <div className="task" data-completed={isCompleted}>
            <h3> {title} </h3>
            <p> {body} </p>
            <div className="task-buttons">
                <span>{customFormattedDate}</span>
                <div>
                    <button onClick={isCompleted ? restore : handleNavigate}>
                        {
                            isCompleted ?
                                <i className="fa-solid fa-arrow-rotate-left"></i> :
                                <i className="fa-regular fa-pen-to-square"></i>

                        }
                    </button>
                    <button onClick={isCompleted ? remove : markCompleted}>
                        {
                            isCompleted ?
                                <i className="fa-regular fa-trash-can"></i> :
                                <i className="fa-regular fa-circle-check"></i>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default memo(Todo)



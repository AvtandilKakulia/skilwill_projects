
const Todo = ({ isCompleted, id, body, title, created }) => {
    const milliseconds = new Date(created * 1000)
    const formattedDate = new Intl.DateTimeFormat('ka-GE', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    }).format(milliseconds);
    const [day, month, year] = formattedDate.split('/')
    const customFormattedDate = `${day}.${month}.${year}`

    console.log('Todo Component');
    
    return (
        <div className="task" data-completed={isCompleted}>
            <h3> {title} </h3>
            <p> {body} </p>
            <div className="task-buttons">
                <span>{customFormattedDate}</span>
                <div>
                    <button>
                        {
                            isCompleted ?
                                <i className="fa-solid fa-arrow-rotate-left"></i> :
                                <i className="fa-regular fa-pen-to-square"></i>

                        }
                    </button>
                    <button>
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

export default Todo



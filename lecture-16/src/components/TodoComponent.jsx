import styles from '../styles/TodoComponent.module.css'
import { Todo, TodoContent, TodoInfoDiv, TodoIdDiv, TodoButtonsDiv } from '../styled'



console.log('TodoComponent');

const TodoComponent = ({ id, content, todoColor, todoStatus, fromActiveToProgress, fromProgressToActive, fromActiveToDone, fromDoneToActive, closeTodo}) => {


    return (
        <Todo color={todoColor}>
            <TodoInfoDiv>
                <TodoIdDiv>
                    Todo ID: {id}
                </TodoIdDiv>
                <TodoButtonsDiv>
                    {todoStatus === 'active' ? (
                        <>
                            <i className="fa-solid fa-share" onClick={() => fromActiveToProgress(id)}></i>
                            <i className="fa-regular fa-circle-check" onClick={() => fromActiveToDone(id)}></i>
                            <i className={`${styles.xmark} fa-solid fa-xmark`} onClick={()=>closeTodo(id)}></i>
                        </>
                    ) : todoStatus === 'in-progress' ? (
                        <>
                            <i className="fa-solid fa-share" onClick={() => fromProgressToActive(id)}></i>
                            <i className="fa-regular fa-circle-check" onClick={() => fromActiveToDone(id)}></i>
                            <i className={`${styles.xmark} fa-solid fa-xmark`} onClick={()=>closeTodo(id)}></i>
                        </>
                    ) : (
                        <>
                            <i className="fa-solid fa-share" onClick={()=>fromDoneToActive(id)}></i>
                            <i className={`${styles.xmark} fa-solid fa-xmark`} onClick={()=>closeTodo(id)}></i>
                        </>
                    )}



                </TodoButtonsDiv>
            </TodoInfoDiv>
            <TodoContent>{content}</TodoContent>
        </Todo>
    )
}

export default TodoComponent
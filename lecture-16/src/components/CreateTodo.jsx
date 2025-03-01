import { useRef, useState } from 'react'
import styles from '../styles/createTodo.module.css'

const getNextTodoId = () => {
  const currentMaxId = localStorage.getItem('maxTodoId')
  return currentMaxId ? parseInt(currentMaxId, 10) + 1 : 1
}

const CreateTodo = ({ isOpen, closeModal, addTodo }) => {
  const textareaRef = useRef(null)
  const [todoId, setTodoId] = useState(getNextTodoId())
  const calcColor = () => {
    let red = Math.floor(Math.random() * 255).toString(16).padStart(2, '0')
    let green = Math.floor(Math.random() * 255).toString(16).padStart(2, '0')
    let blue = Math.floor(Math.random() * 255).toString(16).padStart(2, '0')

    return `#${red}${green}${blue}`;
  }

  const addTodoFunc = () => {
    const color = calcColor()
    const newId = todoId
    const todoObject = {
      id: newId,
      content: textareaRef.current.value,
      color: color,
      status: 'active'
    }
    addTodo(todoObject)
    localStorage.setItem('maxTodoId', newId)
    localStorage.setItem(`todo-${newId}`, JSON.stringify(todoObject))
    setTodoId(newId + 1)
    textareaRef.current.value = ''
    closeModal()
  }

  console.log('CreateTodo');
  return (
    <div className={`${styles.crateTodoWrapper} ${isOpen ? styles.show : ''}`} >
      <div className={styles.createTodoBox}>
        <i onClick={closeModal} className="fa-solid fa-xmark"></i>
        <textarea name="" id="" ref={textareaRef}></textarea>
        <button type="button" onClick={addTodoFunc}>Add Todo</button>
      </div>
    </div>
  )
}

export default CreateTodo
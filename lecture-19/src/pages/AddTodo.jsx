import { useRef } from "react"
import { useNavigate } from "react-router"
import useRequest from "../hooks/useRequest"
import UserForm from "../components/UserForm"

const AddEditTodo = () => {
    const { loading, sendRequest } = useRequest({ url: '/api/v1/todos', method: 'POST' })
    const navigate = useNavigate()
    const inputRef = useRef(null)
    const textareaRef = useRef(null)

    const onSubmit = async () => {
        const title = inputRef.current.value.trim()
        const body = textareaRef.current.value.trim()

        if (title === '' && body === '') {
            return alert('Type something.')
        } else {
            await sendRequest([{ title, body, isCompleted: false }])
            navigate('/')
        }
    }

    if (loading) return <div><i className="fa-solid fa-spinner spinner"></i></div>
    console.log('Edit Todo Component');

    return <UserForm onSubmit={onSubmit} navigate={navigate} inputRef={inputRef} textareaRef={textareaRef} />
}

export default AddEditTodo
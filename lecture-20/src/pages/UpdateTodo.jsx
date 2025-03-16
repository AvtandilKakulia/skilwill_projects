import UserForm from '../components/UserForm'
import { useNavigate, useParams } from 'react-router'

import useFetch from '../hooks/useFetch'
import { useEffect, useRef } from 'react'
import useRequest from '../hooks/useRequest'

const UpdateTodo = () => {
  const { todoId } = useParams()
  const navigate = useNavigate()
  const { loading, data, error } = useFetch({ url: `/api/v1/todos/${todoId}`, method: 'GET' })
  const { sendRequest } = useRequest({ url: `/api/v1/todos/${todoId}`, method: 'PUT' })

  const inputRef = useRef(null)
  const textareaRef = useRef(null);
  
  const onSubmit = async () => {
    const title = inputRef.current.value.trim()
    const body = textareaRef.current.value.trim()

    if (title === '' && body === '') {
      return alert('Type something.')
    } else {
      await sendRequest({ title, body, isCompleted: false })
      navigate('/')
    }
  }

  useEffect(() => {
    if (data) {
      if (inputRef.current) {
        inputRef.current.value = data.title || ''
      }

      if (textareaRef.current) {
        textareaRef.current.value = data.body || ''
      }
    }
  }, [data])

  if (loading && !data) return <div><i className="fa-solid fa-spinner spinner"></i></div>
  if (error || !data) return <div>Error: {error}</div>

  return (
    <UserForm onSubmit={onSubmit} inputRef={inputRef} textareaRef={textareaRef} navigate={navigate}/>
  )
}

export default UpdateTodo
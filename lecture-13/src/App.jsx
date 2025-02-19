import { Component } from 'react'
import './App.css'
import TodoList from './components/TodoList'

class App extends Component {
  render() {
    console.log('Render from App.jsx')
    return (
      <TodoList />
    )
  }
}

export default App
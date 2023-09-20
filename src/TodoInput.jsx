import { nanoid } from 'nanoid'
import { useState } from 'react'

const TodoInput = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const newTodo = {
      id: nanoid(),
      task: e.target['new-todo'].value,
      completed: false
    }
    addTodo(newTodo)
    setInputValue('')
  }

  return (
    <form className="join mx-auto w-full" onSubmit={handleFormSubmit}>
      <input
        className="input join-item input-bordered w-full"
        name="new-todo"
        onChange={handleInputChange}
        placeholder="New Todo"
        type="text"
        value={inputValue}
      />
      <button className="btn btn-success join-item">Add</button>
    </form>
  )
}

export default TodoInput

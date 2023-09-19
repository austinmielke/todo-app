import { useState } from 'react'
import Todo from './Todo'
import TodoInput from './TodoInput'

const TodoList = () => {
  const defaultTasks = [
    {
      id: '123',
      task: 'Do laundry',
      completed: false
    },
    {
      id: '124',
      task: 'Clean bathroom',
      completed: false
    },
    {
      id: '125',
      task: 'Make bed',
      completed: true
    }
  ]

  const [todos, setTodos] = useState(defaultTasks)

  const addTodo = (newTodo) => {
    const updatedTodos = [...todos, newTodo]
    setTodos(updatedTodos)
  }

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => {
      return todo.id !== id
    })
    setTodos(updatedTodos)
  }

  return (
    <>
      <TodoInput addTodo={addTodo} />
      <ul className="mx-auto w-full">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} />
        ))}
      </ul>
    </>
  )
}

export default TodoList

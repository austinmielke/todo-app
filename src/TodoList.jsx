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

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) => {
      return todo.id === id
        ? {
            ...todo,
            completed: !todo.completed
          }
        : todo
    })
    setTodos(updatedTodos)
  }

  const updateTask = (id, newTask) => {
    const updatedTodos = todos.map((todo) => {
      return todo.id === id
        ? {
            ...todo,
            task: newTask
          }
        : todo
    })
    setTodos(updatedTodos)
  }

  return (
    <>
      <TodoInput addTodo={addTodo} />
      <ul className="mx-auto w-full">
        {todos.map((todo) => (
          <Todo
            deleteTodo={deleteTodo}
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            updateTask={updateTask}
          />
        ))}
      </ul>
    </>
  )
}

export default TodoList

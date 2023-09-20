import { Fragment, useState } from 'react'
import Todo from './Todo'
import TodoInput from './TodoInput'
import { useLocalStorage } from '@uidotdev/usehooks'

const TodoList = () => {
  const [savedTodos, updateSavedTodos] = useLocalStorage('todo-app', [])
  const [todos, setTodos] = useState(savedTodos)

  const addTodo = (newTodo) => {
    const updatedTodos = [...todos, newTodo]
    setTodos(updatedTodos)
    updateSavedTodos(updatedTodos)
  }

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => {
      return todo.id !== id
    })
    setTodos(updatedTodos)
    updateSavedTodos(updatedTodos)
  }

  const handleClear = () => {
    setTodos([])
    updateSavedTodos([])
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
    updateSavedTodos(updatedTodos)
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
    updateSavedTodos(updatedTodos)
  }

  return (
    <>
      <TodoInput addTodo={addTodo} />
      {todos.length > 0 && (
        <Fragment>
          <ul className="mx-auto mt-8 w-full">
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
          <button className="btn btn-error btn-sm" onClick={handleClear}>
            Clear All Todos
          </button>
        </Fragment>
      )}
    </>
  )
}

export default TodoList

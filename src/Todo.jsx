import { Fragment, useState } from 'react'

const Todo = ({ deleteTodo, todo, toggleComplete, updateTask }) => {
  const [editing, setEditing] = useState(false)
  const [updateInputValue, setUpdateInputValue] = useState(todo.task)

  const handleComplete = () => {
    if (!editing) {
      toggleComplete(todo.id)
    }
  }

  const handleDeleteClick = () => {
    deleteTodo(todo.id)
  }

  const handleEditClick = () => {
    setEditing(true)
  }

  const handleEditSubmit = () => {
    updateTask(todo.id, updateInputValue)
    setEditing(false)
  }

  const handleInputChange = (e) => {
    setUpdateInputValue(e.target.value)
  }

  const handleInputKeyDown = (e) => {
    if (e.key === 'Escape') {
      setEditing(false)
    } else if (e.key === 'Enter') {
      updateTask(todo.id, updateInputValue)
      setEditing(false)
    }
  }

  return (
    <li className="join w-full" key={todo.id}>
      <input
        checked={todo.completed}
        className="checkbox mr-2"
        name="completed"
        onChange={handleComplete}
        type="checkbox"
      />
      {editing ? (
        <Fragment>
          <input
            className="input input-bordered input-xs mr-2 w-full"
            name="update-todo"
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            type="text"
            value={updateInputValue}
          />
          <button
            className="btn btn-warning btn-xs mr-2"
            onClick={handleEditSubmit}
          >
            Edit
          </button>
        </Fragment>
      ) : (
        <Fragment>
          <span
            className={
              todo.completed
                ? 'mr-auto cursor-pointer line-through'
                : 'mr-auto cursor-pointer'
            }
            onClick={handleComplete}
          >
            {todo.task}
          </span>
          <button
            className="btn btn-warning btn-xs mr-2"
            onClick={handleEditClick}
          >
            Edit
          </button>
        </Fragment>
      )}

      <button className="btn btn-error btn-xs" onClick={handleDeleteClick}>
        Delete
      </button>
    </li>
  )
}

export default Todo

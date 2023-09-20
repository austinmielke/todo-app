const Todo = ({ deleteTodo, todo, toggleComplete }) => {
  const handleCheck = () => {
    toggleComplete(todo.id)
  }

  const handleDeleteClick = () => {
    deleteTodo(todo.id)
  }

  return (
    <li key={todo.id} className="join w-full">
      <input
        type="checkbox"
        name="completed"
        checked={todo.completed}
        className="checkbox mr-2"
        onChange={handleCheck}
      />
      <span className={todo.completed ? 'mr-auto line-through' : 'mr-auto'}>
        {todo.task}
      </span>
      <button className="btn btn-warning btn-xs mr-2">Edit</button>
      <button className="btn btn-error btn-xs" onClick={handleDeleteClick}>
        Delete
      </button>
    </li>
  )
}

export default Todo

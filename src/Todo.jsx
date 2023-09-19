const Todo = ({ todo }) => {
  return (
    <li key={todo.id} className="join w-full">
      <input
        type="checkbox"
        checked={todo.completed}
        className="checkbox mr-2"
      />
      <span className={todo.completed ? 'mr-auto line-through' : 'mr-auto'}>
        {todo.task}
      </span>
      <button className="btn btn-warning btn-xs mr-2">Edit</button>
      <button className="btn btn-error btn-xs">Delete</button>
    </li>
  )
}

export default Todo

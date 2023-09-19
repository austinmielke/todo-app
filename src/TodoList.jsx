const TodoList = () => {
  return (
    <ul className="mx-auto w-full">
      <li className="join w-full">
        <input type="checkbox" checked={false} className="checkbox mr-2" />
        <span className="mr-auto">Task</span>
        <button className="btn btn-warning btn-xs mr-2">Edit</button>
        <button className="btn btn-error btn-xs">Delete</button>
      </li>
    </ul>
  )
}

export default TodoList

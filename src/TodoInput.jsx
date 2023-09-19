const TodoInput = () => {
  return (
    <form className="join mx-auto mb-8 w-full">
      <input
        name="new-todo"
        type="text"
        placeholder="New Todo"
        className="input join-item input-bordered w-full"
      />
      <button className="btn btn-success join-item">Add</button>
    </form>
  )
}

export default TodoInput

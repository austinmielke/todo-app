const Layout = ({ children }) => {
  return (
    <div className="flex h-screen items-center justify-center bg-base-300">
      <div className="flex w-1/2 flex-col">
        <h1 className="-mt-12 mb-8 text-center text-3xl font-bold text-success">
          Todo App
        </h1>
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default Layout

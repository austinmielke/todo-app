const Layout = ({ children, theme }) => {
  return (
    <div
      className="flex h-screen justify-center bg-base-300 md:items-center"
      data-theme={theme}
    >
      <div className="flex w-full flex-col md:w-1/2">
        <h1 className="mb-8 mt-2 text-center text-3xl font-bold md:-mt-12">
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

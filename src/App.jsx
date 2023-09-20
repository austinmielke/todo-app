import { useState } from 'react'
import Layout from './Layout'
import { useLocalStorage } from '@uidotdev/usehooks'
import ThemeToggle from './ThemeToggle'
import TodoList from './TodoList'

function App() {
  const [savedTheme, updateSavedTheme] = useLocalStorage(
    'todo-app-theme',
    'dark'
  )
  const [theme, setTheme] = useState(savedTheme)

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    updateSavedTheme(newTheme)
  }

  return (
    <Layout theme={theme}>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <TodoList />
    </Layout>
  )
}

export default App

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
  const metaTag = document.head.querySelector('meta[name="theme-color"]')

  const toggleTheme = () => {
    let newTheme
    let newContentColor
    if (theme === 'dark') {
      newTheme = 'light'
      newContentColor = '#E5E6E6'
    } else {
      newTheme = 'dark'
      newContentColor = '#15191E'
    }
    setTheme(newTheme)
    metaTag.setAttribute('content', newContentColor)
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

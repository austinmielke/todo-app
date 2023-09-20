import { useState } from 'react'
import { LuMoon, LuSun } from 'react-icons/lu'

const ThemeToggle = ({ theme, toggleTheme }) => {
  const [checked, setChecked] = useState(theme === 'dark' ? false : true)

  const handleToggle = () => {
    toggleTheme()
    setChecked(!checked)
  }

  return (
    <div className="fixed right-0 top-0 m-3 flex text-xl">
      <div className="my-auto mr-2">
        <LuMoon />
      </div>
      <input
        checked={checked}
        className="toggle"
        name="theme-toggle"
        onChange={handleToggle}
        type="checkbox"
      />
      <div className="my-auto ml-2">
        <LuSun />
      </div>
    </div>
  )
}

export default ThemeToggle

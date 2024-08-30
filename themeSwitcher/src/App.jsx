import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeContextProvider, ThemeContext } from './themeContext/ThemeContext'


function App() {
  const [themeMode, setThemeMode] = useState('light');

  const changeTheme = function(theme){
      setThemeMode(theme)
  }

  useEffect(()=>{
    let html = document.querySelector('html');
    html.classList.remove("light", "dark");
    html.classList.add(themeMode)
  }, [themeMode])

  return (
    <>
      <ThemeContextProvider value={{themeMode, changeTheme}}>
        <button onClick={(e)=>{
          let val = themeMode == "light" ? "dark" : "light"
          setThemeMode(val)
        }}>
          Click Me
        </button>
      </ThemeContextProvider>
    </>
  )
}

export default App

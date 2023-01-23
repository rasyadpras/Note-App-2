import React from "react";
import { GrSun } from "react-icons/gr";
import { IoMdMoon } from "react-icons/io";
import useTheme from "../../hooks/useTheme";

function ThemeToggler() {
    const [theme, changeTheme] = useTheme()
  
    return (
      <button type="button" className="toggle-theme" onClick={() => changeTheme(theme === 'dark' ? 'light' : 'dark')}>
        {
          theme === 'dark' ? <IoMdMoon /> : <GrSun />
        }
      </button>
    )
}

export default ThemeToggler;
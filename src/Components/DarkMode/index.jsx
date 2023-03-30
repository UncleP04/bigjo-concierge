import React from 'react'
import './style.css'
import Sun from '../../Images/Sun.svg'
import Moon from '../../Images/Moon.svg'


const DarkMode =() => {
    const SetDarkMode = () => {
      document.querySelector("body").setAttribute('data-theme', 'dark')
        localStorage.setItem('SelectedTheme', 'dark')
    }

    const SetLightMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'light')
        localStorage.setItem('SelectedTheme', 'light')
    }

    const SelectedTheme = localStorage.getItem('SelectedTheme');
    if (SelectedTheme === 'dark') {
        SetDarkMode();
    }

    const ToggleMode = (e) => {
        if (e.target.checked) SetDarkMode();
        else SetLightMode();
    }
    return(
        <div>
            <div className="dark_mode">
                <input type="checkbox" className="dark_mode_input" id="darkModeToggle" onChange={ToggleMode} defaultChecked={SelectedTheme === 'dark'}/>
                <label htmlFor="darkModeToggle" className="dark_mode_label">
                    <img src={Sun} alt="sun.svg"/>
                    <img src={Moon} alt="moon.svg"/>
                </label>
            </div>
        </div>
    )
}

export default DarkMode;
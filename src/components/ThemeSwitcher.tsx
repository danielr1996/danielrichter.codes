import {useEffect, useState} from "react";
import darkmode from '../assets/img/darkmode.svg'
import lightmode from '../assets/img/lightmode.svg'
export const ThemeSwitcher = () => {
    const [mode, setMode] = useState('')

    useEffect(()=>{
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
            setMode('dark')
        } else {
            document.documentElement.classList.remove('dark')
            setMode('light')
        }
    },[])

    const toggle = (mode: string)=>{
        localStorage.theme = mode
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
            setMode('dark')
        } else {
            document.documentElement.classList.remove('dark')
            setMode('light')
        }
    }

    return <span className="mr-3">
        { mode === 'light' && <button onClick={()=>toggle('dark')}><img src={darkmode.src} alt=""/></button> }
        { mode === 'dark' && <button onClick={()=>toggle('light')}><img src={lightmode.src} alt=""/></button>}
    </span>
}
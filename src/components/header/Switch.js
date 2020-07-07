import React, { useRef } from 'react';
import './switch.css'

function Switch({checked, setDarkMode, setChecked}){
    const ref = useRef(null);
    function handleChange(){
        setDarkMode(ref.current.checked)
        setChecked(ref.current.checked)
    }

    return(
        <div className="dark-mode">
            <p className="dark-mode-title">Dark Mode</p>
            <input ref={ref} onChange={handleChange} type="checkbox" checked={checked} id="check-dark" />
            <label htmlFor="check-dark" className="switch"></label>
        </div>
    )
}

export default Switch;
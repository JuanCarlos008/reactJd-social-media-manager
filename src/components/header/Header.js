import React from 'react';
import './header.css';


function Header({children}){
    return(
        <header className="header">
            <div className="wrapper">
                <div className="brand">
                    <h1>Social Media Dashboard</h1>
                    <p>Total Fallowers: 23,004</p>
                </div>
                {children}
            </div>
        </header>
    )
}

export default Header;
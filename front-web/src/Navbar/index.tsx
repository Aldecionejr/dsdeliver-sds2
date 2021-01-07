import './styles.css';
import { ReactComponent as Logo, ReactComponent } from './logo.svg'
import React from 'react';

function Navbar (){
    return (
        <nav className="main-navbar">
            <ReactComponent />
            <a className = "logo-text" href="home">DS Delivery</a>
        </nav>
    )
}

export default Navbar;
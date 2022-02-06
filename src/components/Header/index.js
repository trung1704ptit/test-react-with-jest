import React from "react";
import './style.scss';
import Logo from './../../assets/graphics/logo.png'

const Header = () => {
    return(
        <header className="headerComponent">
            <div className="wrap">
                <div className="logo">
                    <img src={Logo} alt="app-logo" className="logoIMG"/>
                </div>
            </div>
        </header>
    )
}

export default Header
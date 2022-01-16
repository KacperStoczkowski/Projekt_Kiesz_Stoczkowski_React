import React from "react";
import './Logo.css';
import logoImg from '../../assets/img/logo.png';

const Logo = () => {

    return (
        <h1 className="logo">
            <a href="index.html">
                <img src={logoImg} alt="logo" className="logo-image"/>
            </a>
        </h1>
    );
};

export default Logo;
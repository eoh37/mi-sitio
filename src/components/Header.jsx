import React from "react";
import { Link } from "react-router-dom";
import './HeaderStyles.scss'
const Header = () => {
    
    return (
        <header>
            <a href="/">Home</a>
            <a href="/contact">Contacto</a>
            <a href="/portfolio">Portafolio</a>
            <a href="/projects">Projectos</a>

        </header>
    )
}
export default Header
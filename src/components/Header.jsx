import React from "react";
import logovx from "../logovx.png";

function Header() {   
    return (
        <header className={"cabecalho"}>
            <a href="/">
                <img src={logovx} alt="logo digital vx" className="logo"/>
            </a>
            <nav className="menuCabecalho">
                <ul>
                    <a href="#catalogo"><li>Catálogo</li></a>
                    <li>Portfólio</li>
                    <li>Contato</li>
                    <li>Sobre</li>
                </ul>
            </nav>

        </header>
    );
}

export default Header;
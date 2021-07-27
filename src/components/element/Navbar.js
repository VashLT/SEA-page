import React, { useContext } from 'react';
import BubbleLogo from "./BubbleLogo";
import ThemeContext from './Theme/ThemeContext';


export default function Navbar() {
    const { theme } = useContext(ThemeContext);

    function toggleHeader() {
        document.getElementById("navbar-parent").classList.toggle("active");
    }

    return (
        <header
            id="navbar-parent"
            className={"c-nav smooth" + (theme === "dark" ? " dark-mode" : "")}
        >
            <nav id="navbar" className="navbar navbar-expand-xl navbar-light">
                <BubbleLogo responsive={true} />
                <button className="navbar-toggler" id="navbar-hamburger" data-target="#responsive-navbar-nav" aria-controls="responsive-navbar-nav" data-toggle="collapse" type="button" aria-expanded="false" aria-label="Toggle navigation" onClick={() => toggleHeader()}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="responsive-navbar-nav">
                    <div className="nav-links navbar-nav">
                        <a href="/areas" className="typo-nav-link nav-item-spaced mr-5 underlined-link animate-nav-item nav-link">Salas de chat</a>
                        <a href="/horarios" className="typo-nav-link nav-item-spaced mr-5 underlined-link animate-nav-item nav-link">Franjas de atención</a>
                        <a href="/faq" className="typo-nav-link nav-item-spaced underlined-link animate-nav-item nav-link">FAQ</a>
                    </div>
                </div>
            </nav>
        </header>
    );
}

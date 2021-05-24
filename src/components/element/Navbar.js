import React from 'react';
import BubbleLogo from "./BubbleLogo";


export default function Navbar(props) {
    console.log(`props on navbar`, props)

    var extraClass = props.theme == "dark" ? "dark-mode" : "";

    const navContainerClasses = "c-nav smooth " + extraClass;

    function toggleHeader() {
        document.getElementById("navbar-parent").classList.toggle("active");
    }

    const navContainer = React.createElement(
        "header",
        {
            className: navContainerClasses,
            id: "navbar-parent"
        },
        <nav id="navbar" className="navbar navbar-expand-xl navbar-light sticky-top">
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
    );
    
    return navContainer;
}

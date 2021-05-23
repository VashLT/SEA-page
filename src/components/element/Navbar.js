import React from 'react';
import {
    Navbar as RNavbar,
    Nav
} from 'react-bootstrap'
import BubbleLogo from "./BubbleLogo";


export default function Navbar(props) {
    // return (
    //     <RNavbar collapseOnSelect sticky="top" expand="xl" id="navbar">
    //         <BubbleLogo responsive={true} />
    //         <RNavbar.Toggle aria-controls="responsive-navbar-nav" />
    //         <RNavbar.Collapse id="responsive-navbar-nav">
    //             <div className="nav-links navbar-nav">
    //                 <Nav.Link className="typo-nav-link nav-item-spaced mr-5 underlined-link animate-nav-item" href="/areas">Salas de chat</Nav.Link>
    //                 <Nav.Link className="typo-nav-link nav-item-spaced mr-5 underlined-link animate-nav-item" href="/horarios">Franjas de atención</Nav.Link>
    //                 <Nav.Link className="typo-nav-link nav-item-spaced underlined-link animate-nav-item" href="/faq">FAQ</Nav.Link>
    //             </div>
    //         </RNavbar.Collapse>
    //     </RNavbar>
    // );
    return (
        <nav id="navbar" className="navbar navbar-expand-xl navbar-light sticky-top">
            <BubbleLogo responsive={true} />
            <button className="navbar-toggler" id="navbar-hamburger" data-target="#responsive-navbar-nav" aria-controls="responsive-navbar-nav" data-toggle="collapse" type="button" aria-expanded="false" aria-label="Toggle navigation">
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
}

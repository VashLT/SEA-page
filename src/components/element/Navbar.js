import React from 'react';
import {
    Navbar as RNavbar,
    Nav
} from 'react-bootstrap'
import BubbleLogo from "./BubbleLogo";


export default function Navbar(props) {
    return (
        <RNavbar collapseOnSelect sticky="top" expand="xl" id="navbar">
            <BubbleLogo responsive={true}/>
            <RNavbar.Toggle aria-controls="responsive-navbar-nav" />
            <RNavbar.Collapse id="responsive-navbar-nav">
                <div className="nav-links navbar-nav">
                    <Nav.Link className="typo-nav-link nav-item-spaced mr-5 underlined-link animate-nav-item" href="/areas">ÁREA+ENLACES</Nav.Link>
                    <Nav.Link className="typo-nav-link nav-item-spaced mr-5 underlined-link animate-nav-item" href="/horarios">FRANJAS DE ATENCIÓN</Nav.Link>
                    <Nav.Link className="typo-nav-link nav-item-spaced underlined-link animate-nav-item" href="/faq">FAQ</Nav.Link>
                </div>
            </RNavbar.Collapse>
        </RNavbar>
    );
}

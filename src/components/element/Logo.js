import React from 'react';
import logoImg from '../../images/logo.svg'

export default function Logo() {
    return (
        <div className="logo smooth-out">
            <img src={logoImg} alt="SEA Online" className="rounded"/>
        </div>
    )
}

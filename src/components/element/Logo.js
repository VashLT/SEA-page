import React from 'react';
import {ReactComponent as LogoSVG} from '../../images/logo.svg'

export default function Logo() {
    return (
        <div className="logo smooth-out">
            <LogoSVG className="rounded"/>
        </div>
    )
}

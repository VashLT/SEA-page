import React from 'react';
import { ReactComponent as LogoSVG } from '../images/logo.svg'

export const Logo: React.FC = () => {
    return (
        <div className="logo smooth-out">
            <LogoSVG className="rounded" />
        </div>
    )
}

export default Logo;
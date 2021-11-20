import React from 'react';
import Logo from "./Logo";
import { Link } from 'react-router-dom';

import { redirectHome } from '../utils/functions';

export const BubbleLogo: React.FC<BubbleLogoProps> = ({ tipPosition, responsive }) => {
    var bubbleClass;

    if (!tipPosition) {
        bubbleClass = "speech-bubble--right";
    } else {
        switch (tipPosition) {
            case "left":
                bubbleClass = "speech-bubble--left";
                break;
            case "right":
                bubbleClass = "speech-bubble--right";
                break;
            default:
                bubbleClass = "speech-bubble--left";
                break;
        }
    }

    if (responsive) {
        bubbleClass = bubbleClass + " bubble-responsive";
    }

    return (
        <div
            className={`${bubbleClass} c-logo animate-logo`}
            id="logo"
            onClick={() => redirectHome()}
        >
            <Link to="/" className="logo-link typo-nav-title" id="seaRedirectHome">SEA Online</Link>
            {/* <a
                className="logo-link typo-nav-title"
                href="/"
                id="seaRedirectHome"
            >
                SEA Online
            </a> */}
            <Logo />
        </div>
    );
}

export default BubbleLogo;
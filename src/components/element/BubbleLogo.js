import React from 'react';
import Logo from "./Logo";

import { redirectHome } from '../../utils/functions';

export default function BubbleLogo(props) {
    var bubbleClass;

    if (!props.hasOwnProperty("tipPosition")) {
        bubbleClass = "speech-bubble--right";
    } else {
        switch (props.tipPosition) {
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

    if (props.hasOwnProperty("responsive") && props.responsive) {
        bubbleClass = bubbleClass + " bubble-responsive";
    }

    return (
        <div
            className={`${bubbleClass} c-logo animate-logo`}
            id="logo"
            onClick={() => redirectHome()}
        >
            <a
                className="logo-link typo-nav-title"
                href="/"
                id="seaRedirectHome"
            >
                SEA Online
            </a>
            <Logo />
        </div>
    );
}

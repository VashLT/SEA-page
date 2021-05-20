import React from 'react';
import Logo from "./Logo";

export default function BubbleLogo(props) {
    const link = React.createElement(
        'a',
        {
            className: "logo-link typo-nav-title",
            href: "/",
            id: "seaRedirectHome"
        },
        "SEA Online"
    );
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

    bubbleClass = bubbleClass + " c-logo animate-logo";

    const bubbleContainer = React.createElement(
        'div',
        {
            className: bubbleClass,
            onClick: () => document.getElementById("seaRedirectHome").click(),
            id: "logo"
        },
        link,
        <Logo onClick={ () => document.getElementById("seaRedirectHome").click() }/>
    );

    return bubbleContainer
}

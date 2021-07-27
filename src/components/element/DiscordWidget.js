import React, { useContext } from 'react'
import ThemeContext from './Theme/ThemeContext'

const slideUp = (e) => {
    const widget = e.currentTarget;
    if (window.getComputedStyle(widget).getPropertyValue('animation-name') !== 'none') {
        console.log("removing animation ...");
        widget.style.transform = `translateY(${window.innerHeight < 790 ? 85 : 60}%)`;
        widget.style.animationName = "none";
        setTimeout(() => {
            console.log("starting transform ...");
            widget.style.transform = 'translateY(0%)';
        }, 300);
        return;
    }
    widget.style.transform = 'translateY(0%)';
}

const slideDown = (e) => {
    const widget = e.currentTarget;
    widget.style.transform = `translateY(${window.innerHeight < 790 ? 85 : 60}%)`;
}

export default function DiscordWidget() {
    const { theme } = useContext(ThemeContext);
    return (
        <div
            class="c-widget smooth--widget animate-widget"
            onMouseEnter={slideUp}
            onMouseLeave={slideDown}
        >
            <iframe title="Usuarios en nuestro servidor" src={`https://discord.com/widget?id=840380130136162346&theme=${theme}`}
                width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
        </div>
    )
}

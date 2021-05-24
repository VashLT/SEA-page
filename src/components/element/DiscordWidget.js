import React from 'react'

export default function DiscordWidget(props) {
    return (
        <iframe title="Usuarios en nuestro servidor" src={`https://discord.com/widget?id=840380130136162346&theme=${props.theme}`}
            width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
    )
}

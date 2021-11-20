import React, { useContext, useEffect } from 'react';
import Navbar from "../components/Navbar";
import DiscordWidget from "../components/DiscordWidget";
import imgLight from "../images/tutoria.png";
import imgDark from "../images/girl_night.png";
import ThemeContext from '../components/Theme/ThemeContext';
import { ReactComponent as DiscordIcon } from '../images/icon/discord.svg';
import { ReactComponent as UISLogo } from '../images/logos/UIS.svg';



export const LandPage: React.FC = () => {
    const { theme } = useContext(ThemeContext);
    useEffect(() => {
        if (window.innerWidth > 1200) document.body.style.overflowY = "hidden";
    }, []);

    return (
        <div id="landPage" className="smooth">
            <Navbar />
            <main className="c-svg_background--land smooth">
                <div id="mainLandPage">
                    <div className="c-content--main animate-content">
                        <h1 className="typo-h1--main">Ahora te acompañamos desde Discord</h1>
                        <p className="typo-p--main">Únete a nuestro servidor de Discord y recibe tutorías con tan solo <strong>un click</strong>.</p>
                        <div className="c-btn--join">
                            <a className="btn btn-join smooth" href="https://discord.gg/b3QrwP7KN8" rel="noreferrer" target="_blank">
                                <DiscordIcon />
                                &nbsp; Unirse
                            </a>
                        </div>
                    </div>
                    <div className="c-image--main animate-image">
                        <img
                            className="rounded"
                            src={theme === "dark" ? imgDark : imgLight}
                            alt="SEA Online"
                        />
                    </div>
                </div>
                <UISLogo id="UISLogo" />
            </main>
            <DiscordWidget />
        </div>
    );
}

export default LandPage
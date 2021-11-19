import React, { useEffect, memo } from 'react';
import {areas} from "../../data.js";
import Area from "../element/Area";
import BubbleLogo from "../element/BubbleLogo";
import { ReactComponent as UISLogo } from '../../images/logos/UIS.svg';

export default memo( function AreasPage() {
    useEffect(() => {
        document.title = "SEA | Áreas"
    }, []);

    return (
        <div id="areasPage" className="smooth">
            <header id="headerAreasPage" className="animate-line">
                <h1>Salas de chat</h1>
                <BubbleLogo tipPosition="left" responsive={true}/>
            </header>
            <main id="areas" className="c-svg_background--areas smooth">
                {areas.map((area) => <Area {...area}/>)}
            </main>
            <UISLogo id="UISLogo" />
        </div>
    )
});

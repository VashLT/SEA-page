import React, { useEffect } from 'react';
import {areas} from "../../data.js";
import Area from "../element/Area";
import BubbleLogo from "../element/BubbleLogo";

export default function AreasPage() {
    useEffect(() => {
        document.title = "SEA | Areas"
    }, []);

    return (
        <div id="areasPage" className="c-svg_background--areas smooth">
            <header id="headerAreasPage" className="animate-line">
                <h1>Áreas del conocimiento</h1>
                <BubbleLogo tipPosition="left" responsive={true}/>
            </header>
            <main id="areas">
                {areas.map((area) => <Area {...area}/>)}
            </main>
        </div>
    )
}

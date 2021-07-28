import React, { useCallback, useEffect, useState } from 'react';
import {areasSchedule, areasMapIndex} from "../../data.js";
import Schedule from "../element/Schedule";
import BubbleLogo from "../element/BubbleLogo";
import SelectArea from "../element/SelectArea";

import { ReactComponent as UISLogo } from '../../images/logos/UIS.svg';

export default function HorarioPage() {
    useEffect(() => {
        document.title = "SEA | Horarios"
    }, []);
    const [area, setArea] = useState(areasSchedule[0]);
    
    const changeArea = useCallback((event) => {
        const targetAreaIndex = getSelection(event.target);
        console.log("change area to", areasSchedule[targetAreaIndex]);

        setArea(areasSchedule[targetAreaIndex]);
    }, [setArea]);

    return (
        <div id="schedulePage">
            <header id="headerSchedulePage" className="animate-line">
                <h1>Franjas de atención</h1>
                <BubbleLogo tipPosition="left" responsive={true}/>
            </header>
            <main>
                <div className="wrapper-sub-header">
                    <SelectArea onClick={changeArea} />
                    <UISLogo id="UISLogo"/>
                </div>
                <div id="areasSchedule" className="animate-nav-item">
                    <Schedule id={area.id} stripes={area.stripes} color={area.color}/>
                </div>
            </main>
        </div>
    );
}

function getSelection(selectElement) {
    try {
        console.log("getSelection", selectElement.innerHTML);
        return areasMapIndex.get(selectElement.innerHTML);
    } catch (e) {
        console.error(e);
    }
}

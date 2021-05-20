import React, { useEffect, useState } from 'react';
import {areasSchedule, areasMapIndex} from "../../data.js";
import Schedule from "../element/Schedule";
import BubbleLogo from "../element/BubbleLogo";
import SelectArea from "../element/SelectArea";

export default function HorarioPage() {
    useEffect(() => {
        document.title = "SEA | Horarios"
    }, []);
    const [area, setArea] = useState(areasSchedule[0]);
    
    function changeArea(event) {
        const targetAreaIndex = getSelection(event.target);
        console.log("change area to", areasSchedule[targetAreaIndex]);

        setArea(areasSchedule[targetAreaIndex]);
    }
    function mapSchedule(schedule) {
        return (
            <div className="carousel-item carousel-schedule">
                <Schedule id={schedule.id} stripes={schedule.stripes} />
            </div>
        )
    }
    return (
        <div id="schedulePage">
            <header id="headerSchedulePage" className="animate-line">
                <h1>Franjas de atención</h1>
                <BubbleLogo tipPosition="left" responsive={true}/>
            </header>
            <main>
                <SelectArea onClick={(e) => changeArea(e)}/>
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

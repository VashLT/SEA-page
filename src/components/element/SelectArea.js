import React, { useState } from 'react';
import { areas, areasMapIndex } from '../../data.js';


export default function SelectArea(props) {
    const [activeArea, setArea] = useState(areas[0])
    if (!props.hasOwnProperty("onClick")) {
        throw "SelectArea component requires 'onClick' property";
    }

    console.log(props, props.onChange)

    function toggleArea(e) {
        const selectedArea = e.target;
        try {
            const newArea = areas[areasMapIndex.get(selectedArea.innerHTML)];
            console.log("new area", newArea);
            setArea(newArea);
        } catch (e) {
            console.error(e);
            return;
        }

    }

    function updateState(e) {
        if (activeArea.name !== e.target.innerHTML) {
            toggleArea(e);
            props.onClick(e);
        }
    }

    function mapSelect(area) {
        return (
            <button className={"dropdown-item select-area " + getCSSClass(area.name)} onClick={ updateState }>{ area.name }</button>
        )
    }
    return (
        <div className="btn-group c-select--schedule">
            <button id="selectArea" className={"btn btn-xl " + getCSSClass(activeArea.name)} type="button"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {activeArea.name}
            </button>
            <div class="dropdown-menu select-menu">
                {areas.map((area) => mapSelect(area))}
            </div>
        </div>
    )
}

function getCSSClass(areaName) {
    switch (areaName) {
        case "Matemáticas":
            return "area-circle--green";
        case "Física":
            return "area-circle--purple";
        case "Química":
            return "area-circle--blue";
        case "Idiomas":
            return "area-circle--pink";
        case "Descriptiva":
            return "area-circle--orange";
        default:
            return "area-circle--green";
    }
}

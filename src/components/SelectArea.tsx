import React, { useCallback, useState } from 'react';
import { areas, areasMapIndex } from '../data';

const mapSelect = (area: Iarea, updateState: (e: React.MouseEvent) => void) => {
    return (
        <button className={"dropdown-item select-area " + getCSSClass(area.name)} onClick={updateState}>{area.name}</button>
    );
}

export const SelectArea: React.FC<SelectAreaProps> = ({ onClick }) => {
    const [activeArea, setArea] = useState(areas[0])

    const toggleArea = useCallback((e) => {
        const selectedArea = e.target;
        try {
            const newArea = areas[areasMapIndex.get(selectedArea.innerHTML)];
            console.log("new area", newArea);
            setArea(newArea);
        } catch (e) {
            console.error(e);
            return;
        }
    }, [setArea]);

    const updateState = useCallback((e: React.MouseEvent) => {
        if (activeArea.name !== (e.target as HTMLElement).innerHTML) {
            toggleArea(e);
            onClick!(e);
        }
    }, [onClick, toggleArea, activeArea]);

    return (
        <div className="btn-group c-select--schedule">
            <button id="selectArea" className={"btn btn-xl " + getCSSClass(activeArea.name)} type="button"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {activeArea.name}
            </button>
            <div className="dropdown-menu select-menu">
                {areas.map((area) => mapSelect(area, updateState))}
            </div>
        </div>
    )
}

function getCSSClass(areaName: string) {
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

export default SelectArea;
import React, { useCallback, useEffect, useState } from 'react';
import { areasSchedule, areasMapIndex } from "../data";
import Schedule from "../components/Schedule";
import BubbleLogo from "../components/BubbleLogo";
import SelectArea from "../components/SelectArea";

import useGoogleSheets from 'use-google-sheets';

import { ReactComponent as UISLogo } from '../images/logos/UIS.svg';

import LoadSpinner from '../components/LoadSpinner';

const { REACT_APP_GOOGLE_API_KEY } = process.env;

export const HorarioPage: React.FC = () => {
    useEffect(() => {
        document.title = "SEA | Horarios"
    }, []);
    const [area, setArea] = useState(areasSchedule[0]);

    console.log({ REACT_APP_GOOGLE_API_KEY })

    const { data, loading, error } = useGoogleSheets({
        apiKey: REACT_APP_GOOGLE_API_KEY!,
        sheetId: area.sheetId
    })


    const changeArea = useCallback((event) => {
        const targetAreaIndex = getSelection(event.target);

        setArea(areasSchedule[targetAreaIndex]);
    }, [setArea]);

    console.log(data);

    return (
        <div id="schedulePage">
            <header id="headerSchedulePage" className="animate-line">
                <h1>Franjas de atención</h1>
                <BubbleLogo tipPosition="left" responsive={true} />
            </header>
            <main>
                <div className="wrapper-sub-header">
                    <SelectArea onClick={changeArea} />
                    <UISLogo id="UISLogo" />
                </div>
                <div id="areasSchedule" className="animate-nav-item">
                    {loading ?
                        <LoadSpinner />
                        : <Schedule {...area} />
                    }
                </div>
            </main>
        </div>
    );
}

const getSelection = (selectElement: HTMLElement) => {
    try {
        console.log("getSelection", selectElement.innerHTML);
        return areasMapIndex.get(selectElement.innerHTML);
    } catch (e) {
        console.error(e);
    }
}

export default HorarioPage;
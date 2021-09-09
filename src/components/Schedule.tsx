import React from 'react';

const days = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo"
]

const mapHeader = (header: string) => {
    return (
        <div className="col column--day column-header">
            <p className="typo-p--schedule-header">{header}</p>
        </div>
    )
}

export const Schedule: React.FC<ScheduleProps> = ({ id, stripes, ...props }) => {
    const isEmpty = !stripes || Object.keys(stripes).length === 0;
    console.log({ isEmpty });
    return (
        <div id={id} className="horario">
            <div className={`container-fluid c-schedule ${"disabled" in props ? "not-active" : ""}`}>
                <div className="row row-header">
                    <div className="col column--time" style={{ border: "none" }}>
                        <p className="typo-p--schedule-header">Hora</p>
                    </div>
                    {days.map((header) => mapHeader(header))}
                </div>
                {isEmpty ?
                    [0, 0, 0, 0].map(() => <EmptyStripe />)
                    : stripes.map((stripe) => <TimeStripe {...stripe} />)
                }
            </div>
        </div>
    );
}


// time, tutors
const mapName = (name: string) => {
    if (name) {
        return <p className="typo-p--schedule-tutor">{name}</p>
    }
}

const mapTutors = (tutorsInStripe: { names?: string[]; }) => {
    return (
        <>
            {tutorsInStripe.names ?
                <div className="col column--day c-stripe">
                    {tutorsInStripe.names.map((name) => mapName(name))}
                </div>
                : <div className="col column--day c-stripe--disabled"></div>
            }
        </>
    );
}

const TimeStripe: React.FC<TimeStripeProps> = ({ tutors, time }) => {
    return (
        <div className="row row-stripe">
            <div className="col column--time c-stripe">
                <p className="typo-p--schedule-time"><strong>{time}</strong></p>
            </div>
            {tutors.map((tutorsInStripe) => mapTutors(tutorsInStripe))}
        </div>
    );
}

const EmptyStripe: React.FC = () => {
    return (
        <div className="row row-stripe">
            <div className="col column--time c-stripe">
                <p className="typo-p--schedule-time"></p>
            </div>
        </div>
    );
}

export default Schedule;
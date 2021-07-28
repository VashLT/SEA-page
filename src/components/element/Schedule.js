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

function mapHeader(header) {
        return (
            <div className="col column--day column-header">
                <p className="typo-p--schedule-header">{header}</p>
            </div>
        )
    }

export default function Schedule(props) {
    if (!props.hasOwnProperty("stripes") || Object.keys(props.stripes).length === 0) {
        return (
            <div id={props.id} className="horario">
                <div class="container-fluid c-schedule">
                    <div className="row row-header">
                        <div className="col column--time" style={{ border: "none" }}>
                            <p className="typo-p--schedule-header">Hora</p>
                        </div>
                        {days.map((header) => mapHeader(header))}
                    </div>
                    {[0, 0, 0, 0].map(() => <EmptyStripe />)}
                </div>
            </div>
        );
    }

    return (
        <div id={props.id} className="horario">
            <div class="container-fluid c-schedule">
                <div className="row row-header">
                    <div className="col column--time" style={{border:"none"}}>
                        <p className="typo-p--schedule-header">Hora</p>
                    </div>
                    {days.map((header) => mapHeader(header))}
                </div>
                {props.stripes.map((stripe) => <TimeStripe {...stripe} />)}
            </div>
        </div>
    );
}


// time, tutors
function mapName(name) {
    if (name) {
        return <p className="typo-p--schedule-tutor">{ name }</p>
    }
}

function mapTutors(tutorsInStripe) {
    if (!tutorsInStripe.hasOwnProperty('names')) {
        return <div className="col column--day c-stripe--disabled"></div>
    }
    return (
        <div className="col column--day c-stripe">
            {tutorsInStripe.names.map((name) => mapName(name))}
        </div>
    );
}

function TimeStripe(props) {
    return (
        <div className="row row-stripe">
            <div className="col column--time c-stripe">
                <p className="typo-p--schedule-time"><strong>{props.time}</strong></p>
            </div>
            {props.tutors.map((tutorsInStripe) => mapTutors(tutorsInStripe))}
        </div>
    );
}

function EmptyStripe() {
    return (
        <div className="row row-stripe">
            <div className="col column--time c-stripe">
                <p className="typo-p--schedule-time"></p>
            </div>
        </div>
    )
}

import React from 'react';
import Subject from './Subject';

export default function Area(props) {
    function mapSubject(subject) {
        return <Subject link={subject.link} name={subject.name} color={props.subjectColor} />;
    }
    return (
        <div className="c-area animate-image" id={normalize_string(props.name)}>
            <div id={ `header${props.name}` } className="c-area--header">
                <a className="link-icon"href={props.link}>
                    {props.icon}
                    &nbsp; {props.name}
                </a>
            </div>
            <div className="c-area--body">
                {props.subjects.map((subject) => mapSubject(subject))}
            </div>
        </div>
    );
}

function normalize_string(string) {
    const normalized_string = string.normalize("NFD").replace(/[\u0300-\u036f]/g, "") // remove accents
    return normalized_string.toLowerCase();
}

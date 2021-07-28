import React from 'react';
import Subject from './Subject';

function mapSubject(subject, color, index) {
    return <Subject link={subject.link} name={subject.name} color={color} key={ `s${index}`}/>;
}

export default function Area({subjects, name, icon, link, subjectColor}) {
    return (
        <div className="c-area animate-image" id={normalize_string(name)}>
            <div id={ `header${name}` } className="c-area--header">
                <a className="link-icon"href={link}>
                    {icon}
                    &nbsp; {name}
                </a>
            </div>
            <div className="c-area--body">
                {subjects.map((subject, index) => mapSubject(subject, subjectColor, index))}
            </div>
        </div>
    );
}

function normalize_string(string) {
    const normalized_string = string.normalize("NFD").replace(/[\u0300-\u036f]/g, "") // remove accents
    return normalized_string.toLowerCase();
}

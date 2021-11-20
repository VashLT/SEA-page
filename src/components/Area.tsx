import React from 'react';
import Subject from './Subject';

const mapSubject = (subject: Isubject, color: string, index: number) => {
    return <Subject link={subject.link} name={subject.name} key={`s${index}`} />;
}

export const Area: React.FC<AreaProps> = ({ subjects, name, icon, link, subjectColor }) => {
    return (
        <div className="c-area animate-image" id={normalize_string(name)}>
            <div id={`header${name}`} className="c-area--header">
                <a className="link-icon" href={link}>
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

const normalize_string = (string: string) => {
    const normalized_string = string.normalize("NFD").replace(/[\u0300-\u036f]/g, "") // remove accents
    return normalized_string.toLowerCase();
}

export default Area;
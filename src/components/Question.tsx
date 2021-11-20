import React from 'react';

const parseAnswer = (ans: string) => {
    const linkRegex = /\(([a-zA-Z0-9:/?&"'.]+)\)\[([a-zA-Z0-9 ]+)\]/g;
    var processedAnswer = ans;
    // ans contains a link
    if (ans.match(linkRegex)) {
        console.log("regex matched!");
        processedAnswer = processedAnswer.replaceAll(
            linkRegex,
            `<a class="typo-a" data-toggle="tooltip" data-placement="top" data-original-title="Ir a Discord" href="$1">$2</a>`
        );
    }
    return <p className="typo-p-answer" dangerouslySetInnerHTML={{ __html: processedAnswer }}></p>;
}

export const Question: React.FC<QuestionProps> = ({ answer, id, question }) => {
    return (
        <div className="card c-question smooth-out">
            <div
                className="card-header c-question--header"
                id={`heading${id}`}
                onClick={() => document!.getElementById(`question${id}`)!.click()}
            >
                <h5 className="mb-0">
                    <p className="btn typo-p" id={`question${id}`} title="Pregunta frecuente" data-toggle="collapse" data-target={`#collapse${id}`} aria-expanded="true" aria-controls="collapseOne">
                        {question}
                    </p>
                </h5>
            </div>

            <div id={`collapse${id}`} className="collapse" aria-labelledby={`heading${id}`} data-parent="#faqs">
                <div className="card-body c-question--body">
                    {parseAnswer(answer)}
                </div>
            </div>
        </div>
    )
}

export default Question;
import React from 'react';

const parseAnswer = (ans: string) => {
    return <p className="typo-p-answer">{ans}</p>;
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
                    <a className="btn typo-p" id={`question${id}`} data-toggle="collapse" data-target={`#collapse${id}`} aria-expanded="true" aria-controls="collapseOne">
                        {question}
                    </a>
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
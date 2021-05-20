import React from 'react';

export default function Question(props) {
    function parseAnswer(ans) {
        if (typeof ans !== 'string' && !ans instanceof String) return ans;
        return <p className="typo-p-answer">{ ans }</p>
    }
    return (
        <div class="card c-question smooth-out">
            <div class="card-header c-question--header" id={`heading${props.id}`} onClick={() => document.getElementById(`question${props.id}`).click() }>
            <h5 class="mb-0">
                    <a class="btn typo-p" id={ `question${props.id}`}data-toggle="collapse" data-target={`#collapse${props.id}`} aria-expanded="true" aria-controls="collapseOne">
                    {props.question}
                </a>
            </h5>
            </div>

            <div id={`collapse${props.id}`} class="collapse" aria-labelledby={`heading${props.id}`} data-parent="#faqs">
                <div class="card-body c-question--body">
                    { parseAnswer(props.answer) }
                </div>
            </div>
        </div>
    )
}

import React, { useEffect } from 'react';
import BubbleLogo from "../element/BubbleLogo";
import Question from "../element/Question";
import { faqs } from "../../data.js";

export default function FAQPage() {
    useEffect(() => {
        document.title = "SEA | Preguntas frecuentes"
    }, []);

    return (
        <div id="faqsPage">
            <header id="headerFAQPage" className="animate-line">
                <h1>Preguntas frecuentes (FAQ)</h1>
                <BubbleLogo tipPosition="left" responsive={true}/>
            </header>
            <main id="faqs">
                {faqs.map((faq) => <Question {...faq}/>)}
            </main>
        </div>
    )
}

import React, { useEffect } from 'react';
import BubbleLogo from "../components/BubbleLogo";
import Question from "../components/Question";
import { ReactComponent as UISLogo } from '../images/logos/UIS.svg';
import { faqs } from "../data";

export const FAQPage = () => {
    useEffect(() => {
        document.title = "SEA | Preguntas frecuentes"
    }, []);

    return (
        <div id="faqsPage">
            <header id="headerFAQPage" className="animate-line">
                <h1>Preguntas frecuentes (FAQ)</h1>
                <BubbleLogo tipPosition="left" responsive={true} />
            </header>
            <main id="faqs">
                {faqs.map((faq) => <Question {...faq} />)}
                <UISLogo id="UISLogo" />
            </main>
        </div>
    )
}

export default FAQPage;

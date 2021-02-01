import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export default function ContactSection() {
    const languageContext = useContext(LanguageContext);

    return (
        <section id="contact-section">
            <section id="logo-section">
                <div id="contact-logo-container">
                    <img id="contact-logo" src="assets/big-logo.png" />
                </div>
            </section>
            <section id="contact-informations-container">
                <div className="contact-element-container">
                    <h1>{languageContext.languageData["call-us"]}</h1>
                    <h3>{languageContext.languageData["restaurant"]}: 504580500</h3>
                    <h3>{languageContext.languageData["partnership"]}: 509820053</h3>
                </div>
                <div className="contact-element-container">
                    <h1>{languageContext.languageData["write-to-us"]}</h1>
                    <h3>Email: itamae.bielsko@gmail.com</h3>
                </div>
                <div className="contact-element-container">
                    <h1>{languageContext.languageData["stay-on-top"]}</h1>
                    <h3>Facebook</h3>
                    <h3>Instagram</h3>
                    <h3>TripAdvisor</h3>
                </div>
            </section>
        </section>
    );
}

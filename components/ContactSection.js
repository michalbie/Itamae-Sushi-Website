import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import { Footer } from "./Footer";

export default function ContactSection() {
    const languageContext = useContext(LanguageContext);

    return (
        <section className="main-section" id="contact-section">
            <section id="logo-section">
                <div id="contact-logo-container">
                    <img id="contact-logo" src="assets/big-logo.png" />
                </div>
            </section>
            <section id="contact-informations-container">
                <div className="contact-element-container">
                    <h1>{languageContext.languageData["call-us"]}</h1>
                    <h3>{languageContext.languageData["restaurant"]}: 123123123</h3>
                    <h3>{languageContext.languageData["partnership"]}: 234234234</h3>
                </div>
                <div className="contact-element-container">
                    <h1>{languageContext.languageData["write-to-us"]}</h1>
                    <h3>biernackimichal022@gmail.com</h3>
                </div>
                <div className="contact-element-container">
                    <h1>{languageContext.languageData["stay-on-top"]}</h1>
                    <div className="social-media-wrapper">
                        <img className="social-media-logo" src="/assets/facebook-logo.png"></img>
                        <img className="social-media-logo" src="/assets/instagram-logo.png"></img>
                        <img className="social-media-logo" src="/assets/tripadvisor-logo.png"></img>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </section>
    );
}

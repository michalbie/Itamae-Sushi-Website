import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import { Footer } from "./Footer";
import Image from "next/image";

export default function ContactSection() {
    const languageContext = useContext(LanguageContext);

    return (
        <section className="main-section" id="contact-section">
            <div className="cover-fadeOpacity-dark"></div>
            <Image src="/assets/contact-background.webp" objectFit="cover" layout="fill" priority />
            <section id="logo-section">
                <div id="contact-logo-container">
                    <img id="contact-logo" src="assets/big-logo.webp" />
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
                        <img className="social-media-logo" src="/assets/facebook-logo.webp"></img>
                        <img className="social-media-logo" src="/assets/instagram-logo.webp"></img>
                        <img className="social-media-logo" src="/assets/tripadvisor-logo.webp"></img>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </section>
    );
}

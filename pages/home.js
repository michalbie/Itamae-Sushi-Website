import Header from "../components/Header";
import WelcomeSection from "../components/WelcomeSection";
import MenuSection from "../components/MenuSection";
import LocationSection from "../components/LocationSection";
import DeliverySection from "../components/DeliverySection";
import ContactSection from "../components/ContactSection";
import { useInView } from "react-intersection-observer";
import React, { useState, useEffect } from "react";
import languagesJSON from "../public/language.json";
import { LanguageContext } from "../components/LanguageContext";

export default function Home() {
    const [language, setLanguage] = useState("english");
    const [languageData, setLanguageData] = useState(languagesJSON[language]);

    useEffect(() => {
        setLanguageData(languagesJSON[language]);
    }, [language]);

    return (
        <LanguageContext.Provider value={languageData}>
            <div id="container">
                <Header />
                <WelcomeSection />
                <MenuSection />
                <DeliverySection />
                <ContactSection />
            </div>
        </LanguageContext.Provider>
    );
}

// TODO: Languages, menu from database, animations, responsiveness

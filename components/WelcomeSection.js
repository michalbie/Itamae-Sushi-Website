import ScrollIntoView from "react-scroll-into-view";
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import Image from "next/image";

export default function WelcomeSection(props) {
    const languageContext = useContext(LanguageContext);

    return (
        <section className="main-section" id="welcome-section">
            <div id="welcome-title-background">
                <div className="cover"></div>
                <Image src="/assets/home-img.webp" objectFit="cover" layout="fill" priority />
            </div>
            <div className="welcome-title-content">
                <h1 className="h1-title">{languageContext.languageData["welcome-title"]}</h1>
                <p className="description">{languageContext.languageData["welcome-description"]}</p>
            </div>
            <ScrollIntoView className="arrow-scroll-wrapper" selector="#menu-section">
                <div className="arrow-container">
                    <div className="animate__animated animate__bounce arrow-down"></div>
                </div>
            </ScrollIntoView>
        </section>
    );
}

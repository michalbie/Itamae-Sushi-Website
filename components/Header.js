import React, { useState, useEffect, useRef, useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import ScrollIntoView from "react-scroll-into-view";

export default function Header() {
    const languageContext = useContext(LanguageContext);
    const [topOffset, setTopOffset] = useState(0);
    const headerRef = useRef(null);

    const addHeaderBehaviour = () => {
        let oldScroll = 0;

        const onScroll = () => {
            if (Math.abs(oldScroll - window.scrollY) > 30) {
                if (oldScroll > window.scrollY) {
                    setTopOffset(0);
                } else if (oldScroll < window.scrollY) {
                    setTopOffset(-headerRef.current.offsetHeight);
                }
                oldScroll = window.scrollY;
            }
        };
        window.addEventListener("scroll", onScroll);
    };

    const switchLanguages = () => {
        console.log(document.getElementById("flag").currentLanguage);
        if (document.getElementById("flag").currentLanguage == "polish") {
            document.getElementById("flag").currentLanguage = "english";
            document.getElementById("flag").src = "/assets/english-flag.jpg";
            languageContext.setLanguage("english");
        } else {
            document.getElementById("flag").currentLanguage = "polish";
            document.getElementById("flag").src = "/assets/polish-flag.jpg";
            languageContext.setLanguage("polish");
        }
    };

    useEffect(() => {
        document.getElementById("flag").currentLanguage = "polish";
        addHeaderBehaviour();
    }, []);

    return (
        <header ref={headerRef} style={{ top: topOffset + "px" }}>
            <div id="logo-section">
                <img id="logo-img" src={"/assets/logo.png"} />
                <h2 id="logo-title">ITAMAE</h2>
            </div>
            <ul>
                <ScrollIntoView className="scroll-view-wrapper" selector="#welcome-section">
                    <li>{languageContext.languageData.buttons["home"]}</li>
                </ScrollIntoView>
                <ScrollIntoView className="scroll-view-wrapper" selector="#menu-section">
                    <li>{languageContext.languageData.buttons["menu"]}</li>
                </ScrollIntoView>
                <ScrollIntoView className="scroll-view-wrapper" selector="#delivery-section">
                    <li>{languageContext.languageData.buttons["delivery"]}</li>
                </ScrollIntoView>
                <ScrollIntoView className="scroll-view-wrapper" selector="#contact-section">
                    <li>{languageContext.languageData.buttons["contact"]}</li>
                </ScrollIntoView>
                <li>
                    <div id="flag-container" onClick={switchLanguages}>
                        <img currentLanguage="polish" id="flag" src="/assets/polish-flag.jpg" />
                    </div>
                </li>
            </ul>
        </header>
    );
}

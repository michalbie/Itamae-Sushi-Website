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

    useEffect(() => {
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
                    <li>{languageContext.buttons["home"]}</li>
                </ScrollIntoView>
                <ScrollIntoView className="scroll-view-wrapper" selector="#menu-section">
                    <li>Menu</li>
                </ScrollIntoView>
                <ScrollIntoView className="scroll-view-wrapper" selector="#delivery-section">
                    <li>Delivery</li>
                </ScrollIntoView>
                <ScrollIntoView className="scroll-view-wrapper" selector="#contact-section">
                    <li>Contact</li>
                </ScrollIntoView>
            </ul>
        </header>
    );
}

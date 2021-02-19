import React, { useState, useEffect, useRef, useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import ScrollIntoView from "react-scroll-into-view";

const HeaderNav = (props) => {
    const languageContext = useContext(LanguageContext);

    return (
        <section className="header-nav">
            <ScrollIntoView className="scroll-view-wrapper" selector="#welcome-section" onClick={props.hideNavbar}>
                <li>{languageContext.languageData.buttons["home"]}</li>
            </ScrollIntoView>
            <ScrollIntoView className="scroll-view-wrapper" selector="#menu-section" onClick={props.hideNavbar}>
                <li>{languageContext.languageData.buttons["menu"]}</li>
            </ScrollIntoView>
            <ScrollIntoView className="scroll-view-wrapper" selector="#delivery-section" onClick={props.hideNavbar}>
                <li>{languageContext.languageData.buttons["delivery"]}</li>
            </ScrollIntoView>
            <ScrollIntoView className="scroll-view-wrapper" selector="#contact-section" onClick={props.hideNavbar}>
                <li>{languageContext.languageData.buttons["contact"]}</li>
            </ScrollIntoView>
        </section>
    );
};

export { HeaderNav };

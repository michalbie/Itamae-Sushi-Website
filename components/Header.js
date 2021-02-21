import React, { useState, useEffect, useRef, useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import ScrollIntoView from "react-scroll-into-view";
import { HeaderNav } from "./HeaderNav";

export default function Header() {
    const languageContext = useContext(LanguageContext);
    const [topOffset, setTopOffset] = useState(0);
    const [isHeaderExtended, setIsHeaderExtended] = useState(false);
    const [originalHeight, setOriginalHeight] = useState(0);
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

    const hideNavbar = () => {
        const header = document.querySelector("header");
        setIsHeaderExtended("Pending");
        header.style.height = parseInt(originalHeight) + "px";
        header.style.paddingTop = "";
        document.getElementById("header-content-extended").style.display = "none";
        header.style.backgroundColor = "rgba(172, 172, 172, 0.4)";
        const transitionDuration = parseFloat(window.getComputedStyle(header)["transition-duration"].split("s")[0]) * 1000;

        setTimeout(() => {
            setIsHeaderExtended(false);
            header.style.height = "";
        }, transitionDuration);
    };

    const showNavbar = () => {
        const header = document.querySelector("header");
        const transitionDuration = parseFloat(window.getComputedStyle(header)["transition-duration"].split("s")[0]) * 1000;
        setIsHeaderExtended("Pending");
        header.style.height = header.offsetHeight + "px"; // we need to set statically it to play height transition
        setOriginalHeight(header.style.height);
        header.style.height = 4 * parseInt(header.offsetHeight) + "px";
        header.style.alignItems = "flex-start";
        header.style.paddingTop = "1em";
        document.getElementById("header-content-extended").style.display = "flex";
        header.style.backgroundColor = "rgba(120, 120, 120, 0.9)";

        let listenWindowResize = window.addEventListener("resize", () => {
            if (window.innerWidth >= 768) {
                //breakpoint
                header.style.height = "";
            }
        });

        setTimeout(() => {
            setIsHeaderExtended(true);
            window.removeEventListener("resize", listenWindowResize);
        }, transitionDuration);
    };

    const toggleNavbar = () => {
        if (isHeaderExtended == true) {
            hideNavbar();
        } else if (isHeaderExtended == false) {
            showNavbar();
        }
    };

    useEffect(() => {
        document.getElementById("flag").currentLanguage = "polish";
        addHeaderBehaviour();
    }, []);

    return (
        <header ref={headerRef} style={{ top: topOffset + "px" }}>
            <section id="header-content-top">
                <div id="logo-section">
                    <img id="logo-img" src={"/assets/logo.png"} />
                    <h2 id="logo-title">ITAMAE</h2>
                </div>
                <ul>
                    <HeaderNav id="top-nav"></HeaderNav>
                    <li>
                        <div id="flag-container" onClick={switchLanguages}>
                            <img currentLanguage="polish" id="flag" src="/assets/polish-flag.jpg" />
                        </div>
                    </li>
                    <li id="nav-toggle-wrapper" onClick={toggleNavbar}>
                        <img id="nav-toggle-btn" src="/assets/nav-btn.png" />
                    </li>
                </ul>
            </section>
            <section id="header-content-extended">
                <div style={{ backgroundColor: "white", width: "90%", height: "1px", opacity: "0.5", marginBottom: "0.5em" }}></div>
                <ul>
                    <HeaderNav id="extended-nav" hideNavbar={hideNavbar}></HeaderNav>
                </ul>
            </section>
        </header>
    );
}

import React from "react";
import MenuOption from "./MenuOption";
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import ScrollAnimation from "react-animate-on-scroll";
import Image from "next/image";

export default function MenuSection() {
    const languageContext = useContext(LanguageContext);
    return (
        <section className="main-section" id="menu-section">
            <div className="cover-fadeOpacity"></div>
            <Image src="/assets/menu-background.webp" objectFit="cover" layout="fill" priority />
            <ScrollAnimation className="animationWrapper" animateIn="animate__fadeIn">
                <section id="menu-options-container">
                    <MenuOption name={languageContext.languageData["menu-options"]["specials"]} source="/assets/menu-options/specials.webp" />
                    <MenuOption name={languageContext.languageData["menu-options"]["starters"]} source="/assets/menu-options/starters.webp" />
                    <MenuOption name={languageContext.languageData["menu-options"]["soups"]} source="/assets/menu-options/soup.webp" />
                    <MenuOption name="Maki Ten" source="/assets/menu-options/maki-ten.webp" />
                    <MenuOption name="Kami maki" source="/assets/menu-options/kami-maki.webp" />
                    <MenuOption name="Futomaki" source="/assets/menu-options/futomaki.webp" />
                    <MenuOption name="Urumaki" source="/assets/menu-options/sushi-option.webp" />
                    <MenuOption name="Hosomaki" source="/assets/menu-options/hosomaki.webp" />
                    <MenuOption name="Gunkan Maki" source="/assets/menu-options/gunkan-maki.webp" />
                    <MenuOption name="Sashimi" source="/assets/menu-options/sashimi.webp" />
                    <MenuOption name="Nigiri" source="/assets/menu-options/nigiri.webp" />
                    <MenuOption name={languageContext.languageData["menu-options"]["for-children"]} source="/assets/menu-options/for-children.webp" />
                    <MenuOption name={languageContext.languageData["menu-options"]["main-dishes"]} source="/assets/menu-options/main-dishes.webp" />
                    <MenuOption name={languageContext.languageData["menu-options"]["salads"]} source="/assets/menu-options/salads.webp" />
                    <MenuOption name={languageContext.languageData["menu-options"]["sushi-sets"]} source="/assets/menu-options/sushi-sets.webp" />
                    <MenuOption name={languageContext.languageData["menu-options"]["desserts"]} source="/assets/menu-options/dessert.webp" />
                    <MenuOption name={languageContext.languageData["menu-options"]["hot-drinks"]} source="/assets/menu-options/hot-drink.webp" />
                    <MenuOption name={languageContext.languageData["menu-options"]["cold-drinks"]} source="/assets/menu-options/cold-drink.webp" />
                    <MenuOption name={languageContext.languageData["menu-options"]["wines"]} source="/assets/menu-options/wines.webp" />
                    <MenuOption name={languageContext.languageData["menu-options"]["alcohol"]} source="/assets/menu-options/alcohol.webp" />
                </section>
            </ScrollAnimation>
            <section id="menu-description-container">
                <h1 id="menu-title">Menu</h1>
                <p id="menu-description">{languageContext.languageData["menu-description"]}</p>
                <button className="big-button">{languageContext.languageData["buttons"]["download-menu"]}</button>
            </section>
        </section>
    );
}

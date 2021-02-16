import React from "react";
import MenuOption from "./MenuOption";
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import ScrollAnimation from "react-animate-on-scroll";

export default function MenuSection() {
    const languageContext = useContext(LanguageContext);
    return (
        <section id="menu-section">
            <ScrollAnimation className="animationWrapper" animateIn="animate__fadeIn">
                <section id="menu-options-container">
                    <MenuOption name={languageContext.languageData["menu-options"]["specials"]} source="/assets/menu-options/specials.jpg" />
                    <MenuOption name={languageContext.languageData["menu-options"]["starters"]} source="/assets/menu-options/starters.jpg" />
                    <MenuOption name={languageContext.languageData["menu-options"]["soups"]} source="/assets/menu-options/soup.jpg" />
                    <MenuOption name="Maki Ten" source="/assets/menu-options/maki-ten.jpg" />
                    <MenuOption name="Kami maki" source="/assets/menu-options/kami-maki.jpg" />
                    <MenuOption name="Futomaki" source="/assets/menu-options/futomaki.jpg" />
                    <MenuOption name="Urumaki" source="/assets/menu-options/sushi-option.jpg" />
                    <MenuOption name="Hosomaki" source="/assets/menu-options/hosomaki.jpg" />
                    <MenuOption name="Gunkan Maki" source="/assets/menu-options/gunkan-maki.jpg" />
                    <MenuOption name="Sashimi" source="/assets/menu-options/sashimi.jpg" />
                    <MenuOption name="Nigiri" source="/assets/menu-options/nigiri.jpg" />
                    <MenuOption name={languageContext.languageData["menu-options"]["for-children"]} source="/assets/menu-options/for-children.jpg" />
                    <MenuOption name={languageContext.languageData["menu-options"]["main-dishes"]} source="/assets/menu-options/main-dishes.jpg" />
                    <MenuOption name={languageContext.languageData["menu-options"]["salads"]} source="/assets/menu-options/salads.jpg" />
                    <MenuOption name={languageContext.languageData["menu-options"]["sushi-sets"]} source="/assets/menu-options/sushi-sets.jpg" />
                    <MenuOption name={languageContext.languageData["menu-options"]["desserts"]} source="/assets/menu-options/dessert.jpg" />
                    <MenuOption name={languageContext.languageData["menu-options"]["hot-drinks"]} source="/assets/menu-options/hot-drink.jpg" />
                    <MenuOption name={languageContext.languageData["menu-options"]["cold-drinks"]} source="/assets/menu-options/cold-drink.jpg" />
                    <MenuOption name={languageContext.languageData["menu-options"]["wines"]} source="/assets/menu-options/wines.jpg" />
                    <MenuOption name={languageContext.languageData["menu-options"]["alcohol"]} source="/assets/menu-options/alcohol.jpg" />
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

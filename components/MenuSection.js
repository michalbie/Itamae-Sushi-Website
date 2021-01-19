import React from "react";
import MenuOption from "./MenuOption";

export default function MenuSection() {
    return (
        <section id="menu-section">
            <section id="menu-options-container">
                <MenuOption name="Specials" />
                <MenuOption name="Starters" />
                <MenuOption name="Soups" />
                <MenuOption name="Maki Ten" />
                <MenuOption name="Kami maki" />
                <MenuOption name="Futomaki" />
                <MenuOption name="Urumaki" />
                <MenuOption name="Hosomaki" />
                <MenuOption name="Gunkan Maki" />
                <MenuOption name="Sashimi" />
                <MenuOption name="Nigiri" />
                <MenuOption name="For children" />
                <MenuOption name="Main dishes" />
                <MenuOption name="Salads" />
                <MenuOption name="Sushi sets" />
                <MenuOption name="Desserts" />
                <MenuOption name="Hot drinks" />
                <MenuOption name="Cold drinks" />
                <MenuOption name="Wines" />
                <MenuOption name="Alcohol" />
            </section>
            <section id="menu-description-container">
                <h1 id="menu-title">Menu</h1>
                <p id="menu-description">
                    Sushi is our specialty. Each roll is made of carefully selected ingredients of the highest quality with attention to the smallest
                    detail, and the experience and precision of our sushimasters translate into the final receipt of the whole. However, our cuisine
                    is not only sushi. Inspired by Asian culture, we have created compositions that delight with the richness of flavors and colors.
                    Each of the dishes is carefully thought out, and their complexity makes them appeal to even the most demanding guests. We invite
                    you to taste.
                </p>
                <button id="download-button">Download menu</button>
            </section>
        </section>
    );
}

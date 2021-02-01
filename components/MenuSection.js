import React from "react";
import MenuOption from "./MenuOption";

export default function MenuSection() {
    return (
        <section id="menu-section">
            <section id="menu-options-container">
                <MenuOption name="Specials" source="/assets/menu-options/specials.jpg" />
                <MenuOption name="Starters" source="/assets/menu-options/starters.jpg" />
                <MenuOption name="Soups" source="/assets/menu-options/soup.jpg" />
                <MenuOption name="Maki Ten" source="/assets/menu-options/maki-ten.jpg" />
                <MenuOption name="Kami maki" source="/assets/menu-options/kami-maki.jpg" />
                <MenuOption name="Futomaki" source="/assets/menu-options/futomaki.jpg" />
                <MenuOption name="Urumaki" source="/assets/menu-options/sushi-option.jpg" />
                <MenuOption name="Hosomaki" source="/assets/menu-options/hosomaki.jpg" />
                <MenuOption name="Gunkan Maki" source="/assets/menu-options/gunkan-maki.jpg" />
                <MenuOption name="Sashimi" source="/assets/menu-options/sashimi.jpg" />
                <MenuOption name="Nigiri" source="/assets/menu-options/nigiri.jpg" />
                <MenuOption name="For children" source="/assets/menu-options/for-children.jpg" />
                <MenuOption name="Main dishes" source="/assets/menu-options/main-dishes.jpg" />
                <MenuOption name="Salads" source="/assets/menu-options/salads.jpg" />
                <MenuOption name="Sushi sets" source="/assets/menu-options/sushi-sets.jpg" />
                <MenuOption name="Desserts" source="/assets/menu-options/dessert.jpg" />
                <MenuOption name="Hot drinks" source="/assets/menu-options/hot-drink.jpg" />
                <MenuOption name="Cold drinks" source="/assets/menu-options/cold-drink.jpg" />
                <MenuOption name="Wines" source="/assets/menu-options/wines.jpg" />
                <MenuOption name="Alcohol" source="/assets/menu-options/alcohol.jpg" />
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
                <button className="big-button">Download menu</button>
            </section>
        </section>
    );
}

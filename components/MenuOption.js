import React from "react";

export default function MenuOption(props) {
    return (
        <div className="menu-option">
            <h2>{props.name}</h2>
            <img src={"/assets/sushi-option.jpg"} />
        </div>
    );
}
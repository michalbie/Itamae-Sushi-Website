import React from "react";
import Image from "next/image";

export default function MenuOption(props) {
    return (
        <div className="menu-option">
            <h2>{props.name}</h2>
            <Image src={props.source} layout="fill" objectFit="cover" />
            {/* <img src={props.source}/> */}
        </div>
    );
}

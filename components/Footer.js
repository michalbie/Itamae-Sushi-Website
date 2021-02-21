import React from "react";

export default function Footer() {
    return (
        <footer>
            <div id="website-author-wrapper">
                Website creator:{" "}
                <a href="https://github.com/michalbie" target="_blank">
                    Michał Biernacki
                </a>
            </div>
            <div id="attribution-wrapper">
                <div>
                    Icons made by{" "}
                    <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons" target="_blank">
                        Smashicons
                    </a>{" "}
                    and{" "}
                    <a href="https://www.flaticon.com/authors/freepik" title="Freepik" target="_blank">
                        Freepik
                    </a>
                </div>
            </div>
        </footer>
    );
}

export { Footer };

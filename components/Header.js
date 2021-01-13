import React, { useState, useEffect, useRef } from "react";

export default function Header() {
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
				<li>Home</li>
				<li>Menu</li>
				<li>Delivery</li>
				<li>Contact</li>
			</ul>
		</header>
	);
}

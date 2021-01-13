import ScrollIntoView from "react-scroll-into-view";

export default function WelcomeSection(props) {
	return (
		<section>
			<div id="welcome-title-background"></div>
			<div className="welcome-title-content">
				<h1 className="h1-title">Welcome to the Itamae world</h1>
				<p className="description">Sushi is our specialty. Each roll is made of carefully selected ingredients of the highest quality with attention to the smallest detail, and the experience and precision of our sushimasters translate into the final receipt of the whole.</p>
			</div>
			<ScrollIntoView selector="#location-section">
				<div className="arrow-container">
					<div className="animate__animated animate__bounce arrow-down"></div>
				</div>
			</ScrollIntoView>
		</section>
	);
}

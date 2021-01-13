import ScrollIntoView from "react-scroll-into-view";

export default function WelcomeSection(props) {
    return (
        <section>
            <div id="welcome-title-background"></div>
            <div className="welcome-title-content">
                <h1 className="h1-title">Welcome to the Itamae world</h1>
                <p className="description">
                    Immerse yourself in the richness of Asian cuisine flavors that our restaurants offer. Set off on an adventure to the world of
                    Itamae and discover a completely new experience.
                </p>
            </div>
            <ScrollIntoView selector="#menu-section">
                <div className="arrow-container">
                    <div className="animate__animated animate__bounce arrow-down"></div>
                </div>
            </ScrollIntoView>
        </section>
    );
}

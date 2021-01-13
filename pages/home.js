import Header from "../components/Header";
import WelcomeSection from "../components/WelcomeSection";
import MenuSection from "../components/MenuSection";
import LocationSection from "../components/LocationSection";

export default function Home() {
    return (
        <div id="container">
            <Header />
            <WelcomeSection />
            <MenuSection />
            {/* <LocationSection /> */}
        </div>
    );
}

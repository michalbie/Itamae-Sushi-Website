import Header from "../components/Header";
import WelcomeSection from "../components/WelcomeSection";
import MenuSection from "../components/MenuSection";
import LocationSection from "../components/LocationSection";
import DeliverySection from "../components/DeliverySection";
import ContactSection from "../components/ContactSection";
import { useInView } from "react-intersection-observer";

export default function Home() {
    return (
        <div id="container">
            <Header />
            <WelcomeSection />
            <MenuSection />
            <DeliverySection />
            <ContactSection />
        </div>
    );
}

// TODO: Languages, menu from database, animations, responsiveness

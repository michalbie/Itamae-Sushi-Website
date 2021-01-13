import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import WelcomeSection from "../components/WelcomeSection";
//import LocationSection from "../content/location/LocationSection";

export default function Home() {
	return (
		<>
			<div id="container">
				<Header />
				<WelcomeSection />
				{/* <LocationSection /> */}
			</div>
		</>
	);
}

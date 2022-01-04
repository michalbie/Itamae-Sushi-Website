import "../styles/index.css";
import "../styles/Welcome.scss";
import "../styles/Header.scss";
import "../styles/Menu.scss";
import "../styles/Delivery.scss";
import "../styles/Contact.scss";
import "../styles/Footer.scss";
import "animate.css/animate.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Courgette&family=Kalam:wght@400;700&family=Kaushan+Script&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;

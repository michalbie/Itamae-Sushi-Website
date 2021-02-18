import Head from "next/head";
import Home from "./home.js";

export default function Main() {
    return (
        <>
            <Head>
                <title>Itamae Sushi</title>
                {/* <link rel="shortcut icon" href="/favicon.ico" /> */}
            </Head>
            <Home></Home>
        </>
    );
}

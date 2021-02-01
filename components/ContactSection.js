import React from "react";

export default function ContactSection() {
    return (
        <section id="contact-section">
            <section id="logo-section">
                <div id="contact-logo-container">
                    <img id="contact-logo" src="assets/big-logo.png" />
                </div>
            </section>
            <section id="contact-informations-container">
                <div className="contact-element-container">
                    <h1>Call us</h1>
                    <h3>Restaurant: 504580500</h3>
                    <h3>Partnership: 509820053</h3>
                </div>
                <div className="contact-element-container">
                    <h1>Write to us</h1>
                    <h3>Email: itamae.bielsko@gmail.com</h3>
                </div>
                <div className="contact-element-container">
                    <h1>Stay on top</h1>
                    <h3>Facebook</h3>
                    <h3>Instagram</h3>
                    <h3>TripAdvisor</h3>
                </div>
            </section>
        </section>
    );
}

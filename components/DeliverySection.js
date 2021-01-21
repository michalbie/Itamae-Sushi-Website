import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps";

const exampleMapStyles = [
    {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
            {
                color: "#b803ff",
            },
        ],
    },
    {
        featureType: "poi",
        elementType: "labels.text",
        stylers: [
            {
                visibility: "off",
            },
        ],
    },
];

const Map = withScriptjs(
    withGoogleMap((props) => (
        <GoogleMap defaultOptions={{ styles: exampleMapStyles }} defaultZoom={7} defaultCenter={{ lat: 52.1, lng: 19.1343786 }}>
            {props.isMarkerShown && (
                <>
                    <Marker position={{ lat: 50.03738, lng: 19.22136 }} />
                    <Marker position={{ lat: 49.82344, lng: 19.05431 }} />
                </>
            )}
        </GoogleMap>
    ))
);

export default function DeliverySection() {
    return (
        <section id="delivery-section">
            <section id="delivery-content">
                <h1>Delivery to your door</h1>
                <p>
                    Orient flavors in your house? It's possible with us! Just call <strong style={{ color: "#a72e2e" }}>504 580 580</strong> and we'll
                    take care of everything. Find our restaurants on the map and check out our delivery pricing. You can also pick your order by
                    youself. Don't hesitate and call us today. Delicious sushi awaits!
                </p>
                <img id="delivery-section-image" src="assets/delivery-img.png" />
                <button className="big-button" id="delivery-pricing-button">
                    Show pricing
                </button>
            </section>
            <Map
                isMarkerShown
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.googleKey}`}
                // containerElement={<div style={{ height: "90%", width: "50%", marginLeft: "3em" }} />}
                containerElement={<div style={{ height: "95%", width: "50%", padding: "1em" }} />}
                loadingElement={<div style={{ height: "100%" }} />}
                mapElement={<div style={{ height: "100%", borderRadius: "5%" }} />}
            />
        </section>
    );
}

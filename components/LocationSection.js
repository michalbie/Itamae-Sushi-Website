import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps";

const Map = withScriptjs(
    withGoogleMap((props) => (
        <GoogleMap defaultZoom={15} defaultCenter={{ lat: 50.03738, lng: 19.22136 }}>
            {props.isMarkerShown && <Marker position={{ lat: 50.03738, lng: 19.22136 }} />}
        </GoogleMap>
    ))
);

export default function LocationSection() {
    return (
        <section id="location-section">
            <Map
                isMarkerShown
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.googleKey}`}
                // containerElement={<div style={{ height: "90%", width: "50%", marginLeft: "3em" }} />}
                containerElement={<div style={{ height: "100%", width: "50%" }} />}
                loadingElement={<div style={{ height: "100%" }} />}
                mapElement={<div style={{ height: "100%" }} />}
            />
        </section>
    );
}

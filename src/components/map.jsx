import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Marker icon fix (Leaflet default icon problemi üçün)
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { div } from "motion/react-client";

let DefaultIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

function MapView() {
  return (
    <div className="container">
    <div className="w-full h-[500px]">
      <MapContainer
        center={[40.4093, 49.8671]} // Bakı koordinatları
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[40.4093, 49.8671]}>
          <Popup>
            Mənim mağazam 📍 <br /> Burada yerləşirik.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
    </div>
  );
}

export default MapView;
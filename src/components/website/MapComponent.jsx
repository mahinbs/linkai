import React, { useEffect, useRef, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { companyDetails } from "../../content/constant";

// Fix for default icon
let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapComponent = () => {
  const location = useMemo(() => companyDetails.mapCenter, []);
  const zoom = companyDetails.mapZoom;

  const mapRef = useRef(); // Reference to the map

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView(location, zoom);
    }
  }, [location, zoom]);

  return (
    <MapContainer
      center={location}
      zoom={zoom}
      className="h-[70vh] w-full z-0 outline-none grayscale"
      whenCreated={(mapInstance) => (mapRef.current = mapInstance)} // Save the map instance to ref
      scrollWheelZoom={false} // Disable zooming with the scroll wheel
      zoomControl={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={location}>
        <Popup>{companyDetails.location}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;

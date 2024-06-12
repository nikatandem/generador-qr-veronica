import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, useMapEvents, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

if (typeof window !== 'undefined') {
    var requestFn = window.requestAnimationFrame || getPrefixed('RequestAnimationFrame') || timeoutDefer;
    var cancelFn = window.cancelAnimationFrame || getPrefixed('CancelAnimationFrame') ||
      getPrefixed('CancelRequestAnimationFrame') || function (id) { window.clearTimeout(id); };
  }

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl,
  iconRetinaUrl,
  shadowUrl,
});

const LocationMarker = ({ setLatLng }) => {
  const map = useMap();
  useEffect(() => {
    const handleClick = (e) => {
      setLatLng(e.latlng);
    };
    map.on('click', handleClick);

    return () => {
      map.off('click', handleClick);
    };
  }, [map, setLatLng]);
  return null;
};

const MapaConMarcador = ({ setLatLng }) => {
    console.log("El componente del mapa se está renderizando");
    return (
    <MapContainer center={[40.030501, -3.604052]} zoom={13} style={{ height: '50vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <LocationMarker setLatLng={setLatLng} />
    </MapContainer>
  );
};

export default MapaConMarcador;
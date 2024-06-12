import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, useMapEvents, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// import { getPrefixed, timeoutDefer } from '../../../utils'; // Ajusta la ruta según sea necesario
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';


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
      // Limpiar el evento cuando el componente se desmonte
      return () => {
        map.off('click', handleClick);
      };
    }, [map, setLatLng]);
    return null;
  };
const MapaConMarcador = ({ setLatLng }) => {
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

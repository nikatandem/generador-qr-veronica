import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { getPrefixed, timeoutDefer } from '../../../utils'; // Ajusta la ruta según sea necesario
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
    useMapEvents({
        click(e) {
            setLatLng(e.latlng);
        },
    });

    return null;
};

const MapaConMarcador = ({ setLatLng }) => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const requestFn = window.requestAnimationFrame || getPrefixed('requestAnimationFrame') || timeoutDefer;
            const cancelFn = window.cancelAnimationFrame || getPrefixed('cancelAnimationFrame') || getPrefixed('cancelRequestAnimationFrame') || function (id) { window.clearTimeout(id); };
            // Aquí puedes añadir cualquier otro código que use `window`.
            console.log('El código que usa `window` se está ejecutando.');
        }
    }, []);
    
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

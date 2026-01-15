"use client";

import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Leaflet setup inside client component
const customIcon = L.divIcon({
    className: 'bg-transparent',
    html: `<div class="w-6 h-6 bg-electric-cyan rounded-full border-2 border-white shadow-[0_0_15px_rgba(1,250,249,0.8)] animate-pulse"></div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
});

const cityData = [
    { name: "Annaberg-Buchholz", coords: [50.5816, 13.0016], coverage: 98 },
    { name: "Marienberg", coords: [50.6508, 13.1610], coverage: 95 },
    { name: "Stollberg", coords: [50.7093, 12.7757], coverage: 92 },
    { name: "Aue-Bad Schlema", coords: [50.5916, 12.7096], coverage: 96 },
    { name: "Schwarzenberg", coords: [50.5376, 12.7852], coverage: 94 },
];

export default function GeoMapClient() {
    return (
        <MapContainer
            center={[50.62, 12.95]}
            zoom={10}
            scrollWheelZoom={false}
            className="w-full h-full"
            style={{ background: '#0f172a' }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            />

            {cityData.map((city, i) => (
                <div key={i}>
                    <Marker position={city.coords as [number, number]} icon={customIcon}>
                        <Popup className="custom-popup">
                            <div className="p-2">
                                <h3 className="font-bold text-deep-navy">{city.name}</h3>
                                <p className="text-sm text-gray-600">Marktabdeckung: <span className="text-emerald-600 font-bold">{city.coverage}%</span></p>
                            </div>
                        </Popup>
                    </Marker>
                    <Circle
                        center={city.coords as [number, number]}
                        pathOptions={{ fillColor: '#01FAF9', color: '#01FAF9', opacity: 0.3, fillOpacity: 0.1 }}
                        radius={4000}
                    />
                </div>
            ))}
        </MapContainer>
    );
};

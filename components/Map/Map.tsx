'use client';

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon in leaflet with Next.js/Webpack
const icon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const installers = [
  { id: 1, name: 'InvisiShield HQ', position: [38.8951, -77.0364] as [number, number], phone: '1-800-555-0000', city: 'Washington, DC' },
  { id: 2, name: 'Texas Armor Solutions', position: [32.7767, -96.7970] as [number, number], phone: '1-800-555-0001', city: 'Dallas, TX' },
  { id: 3, name: 'West Coast Defense', position: [34.0522, -118.2437] as [number, number], phone: '1-800-555-0002', city: 'Los Angeles, CA' },
  { id: 4, name: 'Midwest Security Glass', position: [41.8781, -87.6298] as [number, number], phone: '1-800-555-0003', city: 'Chicago, IL' },
];

export default function Map() {
  return (
    <MapContainer center={[39.8283, -98.5795]} zoom={4} style={{ height: '100%', width: '100%', borderRadius: '12px' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {installers.map((inst) => (
        <Marker key={inst.id} position={inst.position} icon={icon}>
          <Popup>
            <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '4px' }}>{inst.name}</strong>
            <span style={{ display: 'block', color: '#666' }}>{inst.city}</span>
            <a href={`tel:${inst.phone}`} style={{ display: 'block', marginTop: '8px', color: '#1E6BFF' }}>
              {inst.phone}
            </a>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

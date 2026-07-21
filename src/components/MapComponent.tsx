"use client";

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix Leaflet's default icon issue with Next.js/Webpack
const icon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

interface MapComponentProps {
  jobs: { id: string | number; title: string; aiQuote: string }[];
}

export default function MapComponent({ jobs }: MapComponentProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-full w-full bg-slate-800 flex items-center justify-center">Loading Map...</div>;

  return (
    <div className="h-full w-full relative z-0">
      <MapContainer 
        center={[51.505, -0.09]} 
        zoom={13} 
        style={{ height: '100%', width: '100%', borderRadius: 'inherit' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          className="map-tiles"
        />
        {jobs.map((job) => (
          <Marker position={[51.505, -0.09]} icon={icon} key={job.id}>
            <Popup>
              <strong>{job.title}</strong><br />
              {job.aiQuote}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <style jsx global>{`
        .map-tiles {
          filter: brightness(0.6) invert(1) contrast(3) hue-rotate(200deg) saturate(0.3) brightness(0.7);
        }
        .leaflet-container {
          background: #0f172a;
          font-family: inherit;
        }
        .leaflet-popup-content-wrapper {
          background: #1e293b;
          color: white;
          border: 1px solid #334155;
        }
        .leaflet-popup-tip {
          background: #1e293b;
        }
      `}</style>
    </div>
  );
}

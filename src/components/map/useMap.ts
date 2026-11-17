import { useEffect, useState, useRef } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

type City = {
  lat: number;
  lng: number;
  zoom: number;
};

function useMap(mapRef: React.RefObject<HTMLElement>, city: City) {
  const [map, setMap] = useState<leaflet.Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: city.lat,
          lng: city.lng,
        },
        zoom: city.zoom,
      });

      leaflet
        .tileLayer(
          'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
          {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          }
        )
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  useEffect(() => {
    if (map) {
      map.setView([city.lat, city.lng], city.zoom);
    }
  }, [map, city.lat, city.lng, city.zoom]);

  return map;
}

export default useMap;

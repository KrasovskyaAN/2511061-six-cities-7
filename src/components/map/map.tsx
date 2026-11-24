import { useEffect, useRef } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { Offer } from '../../mocks/offers';
import useMap from './useMap';

const defaultIcon = leaflet.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [13, 39],
});

const activeIcon = leaflet.icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [13, 39],
});

type MapProps = {
  offers: Offer[];
  city: string;
  activeOfferId: string | null;
};

const CITY_LOCATIONS: Record<string, { lat: number; lng: number; zoom: number }> = {
  Paris: { lat: 48.85661, lng: 2.351499, zoom: 12 },
  Cologne: { lat: 50.938361, lng: 6.959974, zoom: 12 },
  Brussels: { lat: 50.846557, lng: 4.351697, zoom: 12 },
  Amsterdam: { lat: 52.3909553943508, lng: 4.85309666406198, zoom: 12 },
  Hamburg: { lat: 53.550341, lng: 10.000654, zoom: 12 },
  Dusseldorf: { lat: 51.225402, lng: 6.776314, zoom: 12 },
};

function Map({ offers, city, activeOfferId }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const cityLocation = CITY_LOCATIONS[city] ?? CITY_LOCATIONS.Paris;
  const map = useMap(mapRef, cityLocation);

  useEffect(() => {
    if (!map) {
      return;
    }

    const markersLayer = leaflet.layerGroup().addTo(map);

    offers.forEach((offer) => {
      leaflet
        .marker(
          {
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          },
          {
            icon: offer.id === activeOfferId ? activeIcon : defaultIcon,
          }
        )
        .addTo(markersLayer);
    });

    return () => {
      markersLayer.remove();
    };
  }, [map, offers, activeOfferId]);

  return <div style={{ height: '100%', minHeight: '500px' }} ref={mapRef}></div>;
}

export default Map;

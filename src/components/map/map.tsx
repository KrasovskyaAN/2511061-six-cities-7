import { useEffect, useRef } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { Offer } from '../../mocks/offers';
import useMap from './useMap';

type MapProps = {
  offers: Offer[];
};

function Map({ offers }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const city = { lat: 52.3909553943508, lng: 4.85309666406198, zoom: 12 };
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          })
          .addTo(map);
      });
    }
  }, [map, offers]);

  return <div style={{ height: '100%', minHeight: '500px' }} ref={mapRef}></div>;
}

export default Map;

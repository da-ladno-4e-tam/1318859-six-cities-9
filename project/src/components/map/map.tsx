import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {useRef, useEffect} from 'react';
import useMap from '../../hooks/useMap';
import {City, Offers} from '../../types/offers';
import {URL_MARKER_DEFAULT} from '../../const';

type MapProps = {
  city: City;
  offers: Offers;
}

function Map({city, offers}: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, offers]);

  return (
    <div
      style={{height: '100%'}}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;

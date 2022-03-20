import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {useRef, useEffect} from 'react';
import useMap from '../../hooks/use-map';
import {Offer, Offers} from '../../types/offers';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';
import {useAppSelector} from '../../hooks';

type MapProps = {
  activeOffer: Offer | null;
  offers: Offers | null;
}

function Map({activeOffer, offers}: MapProps) {
  const {city} = useAppSelector((state) => state);
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    const markers: leaflet.Marker[] = [];

    if (map && offers) {
      offers.forEach((offer) => {
        const marker = leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: (activeOffer && offer.location.latitude === activeOffer.location.latitude && offer.location.longitude === activeOffer.location.longitude)
              ? currentCustomIcon
              : defaultCustomIcon,
          });
        marker.addTo(map);
        markers.push(marker);
      });
      return () => markers.forEach((marker) => {
        marker.removeFrom(map);
      });
    }
  }, [map, city, offers, activeOffer]);

  return (
    <div
      style={{height: '100%'}}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;

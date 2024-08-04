"use client";

import { useEffect, useRef } from 'react';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';

const MapComponent = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const map = new Map({
        basemap: 'topo-vector',
      });

      const view = new MapView({
        container: mapContainerRef.current,
        map: map,
        zoom: 1,
        center: [15, 60], // Longitude, Latitude
      });

      return () => {
        view.destroy();
      };
    }
  }, []);

  return (
    <div
      ref={mapContainerRef}
      style={{ height: '500px', width: '100%' }}
    />
  );
};

export default MapComponent;

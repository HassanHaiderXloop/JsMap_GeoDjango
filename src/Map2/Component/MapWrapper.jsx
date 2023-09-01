import React, { memo, useEffect, useRef, useState } from "react";
import "./MapWrapper.css";
import "leaflet-side-by-side";
import "leaflet-draw";
import "leaflet-draw/dist/leaflet.draw.css";
import "leaflet-measure/dist/leaflet-measure.css";
import "leaflet-measure";
import "leaflet/dist/leaflet.css";
import { MapSingleton } from "./MapSingleton";
import Leaf from "leaflet";

const MapWrapper = ({
  initial,
  tileLayer: { stadiaDark, dark, googleStreets, googleSat },
  geoJson,
  drawControl,
}) => {
  const mapRef = useRef(null);
  
  useEffect(() => {
    const MapInstance = new MapSingleton({
      container: mapRef.current,
      view: initial,
    });
    const map = MapInstance.getLeafletInstance();
    const L = MapInstance.getLeafletObject();
    // geoMap.current = L.map(mapRef.current).setView(LL, zoomLevel);
    // const map = geoMap.current;
    L.tileLayer(stadiaDark.url, stadiaDark.options).addTo(map);
    const baseMaps = {
      Stadia: L.tileLayer(stadiaDark.url, stadiaDark.options),
      Dark: L.tileLayer(dark.url, dark.options),
      "Google Street": L.tileLayer(googleStreets.url, googleStreets.options),
      "Google Satellite": L.tileLayer(googleSat.url, googleSat.options),
    };
    L.control.layers(baseMaps).addTo(map);

    const geoJsonLayer = L.geoJson(geoJson.data, geoJson.options);

    map.on("zoomend", () => {
      const currentZoom = map.getZoom();
      if (currentZoom > 15) {
        map.addLayer(geoJsonLayer);
      } else {
        map.removeLayer(geoJsonLayer);
      }
    });

    var drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);

    map.addControl(
      new L.Control.Draw({
        ...drawControl,
        edit: {
          featureGroup: drawnItems,
        },
      })
    );

    const measureControl = new L.Control.Measure({
      primaryLengthUnit: "kilometers",
      secondaryLengthUnit: "meters",
      primaryAreaUnit: "sqmeters",
      secondaryAreaUnit: "sqfeet",
    });
    measureControl.addTo(map);

    map.on("draw:created", function (event) {
      var layer = event.layer;
      drawnItems.addLayer(layer);

      if (layer instanceof L.Polygon) {
        var area = L.GeometryUtil.geodesicArea(layer.getLatLngs()[0]);
        var popup = L.popup()
          .setLatLng(layer.getBounds().getCenter())
          .setContent("Area: " + area.toFixed(2) + " sqm")
          .openOn(map);
      }
    });

    L.control.scale({ position: "bottomleft" }).addTo(map);

    return () => {
      map.off("zoomend", () => {
        const currentZoom = map.getZoom();

        if (currentZoom > 15) {
          map.addLayer(geoJsonLayer);
        } else {
          map.removeLayer(geoJsonLayer);
        }
      });

      map.off("draw:created", function (event) {
        var layer = event.layer;
        drawnItems.addLayer(layer);

        if (layer instanceof L.Polygon) {
          var area = L.GeometryUtil.geodesicArea(layer.getLatLngs()[0]);
          var popup = L.popup()
            .setLatLng(layer.getBounds().getCenter())
            .setContent("Area: " + area.toFixed(2) + " sqm")
            .openOn(map);
        }
      });
    };
  },  []);

  return (
    <div>
      <div id="map" ref={mapRef} className="leaflet-map"></div>
    </div>
  );
};

export default memo(MapWrapper);

import React, { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./LeafletMap.css";
import 'leaflet-measure';
import "leaflet-measure/dist/leaflet-measure.css";
import data from "./../shapesData.js";
import "leaflet-side-by-side";
import 'leaflet-draw';
import 'leaflet-draw/dist/leaflet.draw.css';


const SIX_MONTHS_IN_MILLISECONDS = 6 * 30 * 24 * 60 * 60 * 1000;

const LeafletMap = () => {
  const mapRef = useRef(null);
  const geoMap = useRef(null);

  const stadiaDark = L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
      maxZoom: 20,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }
  );
  const dark = L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
    {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: "abcd",
      maxZoom: 19,
    }
  );
  useEffect(() => {
    geoMap.current = L.map(mapRef.current).setView([24.8083, 67.0225], 16);
    const map = geoMap.current

    //////////////////////
    // Intitlizing Maps //
    //////////////////////
    stadiaDark.addTo(map);
    const watercolor = L.tileLayer(
      "https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}",
      {
        attribution:
          'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        subdomains: "abcd",
        minZoom: 1,
        maxZoom: 16,
      }
    );
    const googleStreets = L.tileLayer(
      "http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
      {
        subdomains: ["mt0", "mt1", "mt2", "mt3"],
      }
    );
    const googleSat = L.tileLayer(
      "http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
      {
        subdomains: ["mt0", "mt1", "mt2", "mt3"],
      }
    );

    ////////////////////////////
    // Printing Data on popUp //
    ////////////////////////////
    const geoJsonLayer = L.geoJson(data, {
      onEachFeature: function (feature, layer) {
        if (feature.properties && feature.properties.data) {
          const data = feature.properties.data;
          layer.bindPopup(
            `<b>${data.label}</b><br>
                 Owner: ${data.owner}<br>
                 Address: ${data.address}<br>
                 Price: ${data.currentPrice}<br>
                 Sale_Price: ${data.saleDate}
                 `
          );
        }
      },
      style: function (feature) {
        const saleDate = new Date(feature.properties.data.saleDate);
        const currentDate = new Date();
        const isWithinPast6Months =
          currentDate - saleDate <= SIX_MONTHS_IN_MILLISECONDS;

        if (isWithinPast6Months) {
          return {
            color: "red",
            fillColor: "lightpink",
            fillOpacity: 0.6,
            weight: 1,
          };
        } else {
          return {
            color: "blue",
            fillColor: "lightblue",
            fillOpacity: 0.6,
            weight: 1,
          };
        }
      },
    });
    map.on("zoomend", function () {
      const currentZoom = map.getZoom();

      if (currentZoom > 15) {
        map.addLayer(geoJsonLayer);
      } else {
        map.removeLayer(geoJsonLayer);
      }
    });


    ///////////////////
    // Layer Control //
    ///////////////////
    var baseMaps = {
      "Dark": dark,
      "Water color map": watercolor,
      // "Google geo": stadiaDark,
      "Google Street": googleStreets,
      "Google Satellite": googleSat,
    };
    L.control.layers(baseMaps).addTo(map);

    ///////////////////////
    // FeatureGroup Draw //
    ///////////////////////
    var drawnItems = new L.FeatureGroup();
     map.addLayer(drawnItems);
     var drawControl = new L.Control.Draw({
     	position: 'topright',
		     	draw: {
		    polygon: {
		     shapeOptions: {
		      color: 'purple',
          weight:2,
          opacity: 0.3,
          fillColor:'lightred'
		     },
		     allowIntersection: false,
		     drawError: {
		      color: 'orange',
          weight:1,
		      timeout: 1000
		     },
		    },
		    polyline: {
		     shapeOptions: {
		      color: 'red',
          weight:2,
          
		     },
		    },
        text : true ,
		   circle: false,
       weight:1,
		   },
         edit: {
             featureGroup: drawnItems
         }
     });
     map.addControl(drawControl);
     //Envent Handler
      map.on('draw:created', function (e) {
            var type = e.layerType,
                layer = e.layer;
          drawnItems.addLayer(layer);
            
        });

    /////////////////////
    // Leaflet measure //
    /////////////////////
    const measureControl = new L.Control.Measure({
      primaryLengthUnit: "kilometers",
      secondaryLengthUnit: "meters",
      primaryAreaUnit: "sqmeters",
      secondaryAreaUnit: "sqfeet",
    });
    measureControl.addTo(map);

    //////////////////////
    // Scale of Zooming //
    /////////////////////
    L.control.scale({ position: "bottomleft" }).addTo(map);

    return () => {
      map.off('draw:created', function (e) {
        var type = e.layerType,
          layer = e.layer;
          drawnItems.addLayer(layer);
      });
    };
  }, [mapRef.current]);


  return (
    <>
      <div id="map" ref={mapRef} className="leaflet-map"></div>
      <button onClick={() => {
        L.control.sideBySide(stadiaDark, dark).addTo(geoMap.current);
      }}>sideBySide_Map</button>

    </>
  );
};

export default LeafletMap;

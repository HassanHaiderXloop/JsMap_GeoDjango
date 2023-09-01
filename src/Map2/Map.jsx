import React, { useCallback, useRef } from "react";
import MapWrapper from "./Component/MapWrapper";
import { geoJson, tileLayer } from "leaflet";
import data from "./Component/shapesData";
import { MapSingleton } from "./Component/MapSingleton";

/*** Waqar refacting */
const SIX_MONTHS_IN_MILLISECONDS = 6 * 30 * 24 * 60 * 60 * 1000;

const Map = () => {
  
  const tileLayer = {
    stadiaDark: {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      options: {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      },
    },
    dark: {
      url: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
      options: {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: "abcd",
      },
    },
    googleStreets: {
       url : "http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
      options: {
        subdomains: ["mt0", "mt1", "mt2", "mt3"],
      }
    },
    googleSat: {
            url : "http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
        options: {
            subdomains: ["mt0", "mt1", "mt2", "mt3"],
        }
    },
  };

  const toggleButton = useRef();
  const geoJsonCallback = useCallback( (feature, layer) =>{
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
  },[])
  
  const geoJsonStyle = useCallback(  (feature) =>{
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
  },[])

  const geoJson = {
    data : data,
    options: {
        onEachFeature: geoJsonCallback,
        style:geoJsonStyle,
    }
  }

  const drawControl ={
    position: "topright",
    draw: {
      polygon: {
        shapeOptions: {
          color: "purple",
          weight: 2,
          opacity: 0.3,
          fillColor: "lightred",
        },
        allowIntersection: false,
        drawError: {
          color: "orange",
          weight: 1,
          timeout: 1000,
        },
      },
      polyline: {
        shapeOptions: {
          color: "red",
          weight: 2,
        },
      },
      text: true,
      circle: false,
      weight: 1,
    },
  }
  const toggleSideBySide = useCallback(() => {
    const buttonText = toggleButton.current.innerHTML 
    if (buttonText ==="Disable Side by Side"){
        const MapInstance = MapSingleton.instance;
        const map = MapInstance.getLeafletInstance();
        const L = MapInstance.getLeafletObject();
        MapInstance.sideBySide.remove();
        L.tileLayer(tileLayer.stadiaDark.url, tileLayer.stadiaDark.options).addTo(map);
        toggleButton.current.innerHTML = "Enable Side By Side"

    }else{
        const MapInstance = MapSingleton.instance;
        const map = MapInstance.getLeafletInstance();
        const L = MapInstance.getLeafletObject();
        
        var myLayer1 = L.tileLayer(tileLayer.stadiaDark.url, tileLayer.stadiaDark.options).addTo(map);
        var myLayer2 = L.tileLayer(tileLayer.dark.url, tileLayer.dark.options).addTo(map);
        MapInstance.sideBySide = L.control.sideBySide(myLayer1, myLayer2);
        MapInstance.sideBySide.addTo(map);
        toggleButton.current.innerHTML = "Disable Side by Side";
    }
    
},[]);


 const printMap = () => {
     window.print();
 };

  return (
    <div>
      <MapWrapper
        initial={{ LL: [24.8083, 67.0225], zoomLevel: 16 }}
        tileLayer ={tileLayer}
        geoJson = {geoJson}
        drawControl = {drawControl}
      />
      <button onClick={toggleSideBySide} ref={toggleButton}>Enable Side By Side</button>
    </div>
  );
};

export default Map;

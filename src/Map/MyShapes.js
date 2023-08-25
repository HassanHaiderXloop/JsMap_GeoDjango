// import React, { useState } from "react";
// import { GeoJSON, useMapEvent } from "react-leaflet";

// const MyShapes = ({ shapesData }) => {
//   const map = useMapEvent("zoom", () => map.invalidateSize()); // Update map size on zoom change

//   const [showShapes, setShowShapes] = useState(false);

//   useMapEvent("zoomend", (e) => {
//     const currentZoom = e.target.getZoom();
//     setShowShapes(currentZoom >= 15);
//   });

//   const SIX_MONTHS_IN_MILLISECONDS = 6 * 30 * 24 * 60 * 60 * 1000;

//   const getStyleForFeature = (feature) => {
//     const saleDate = new Date(feature.properties.data.saleDate);
//     const currentDate = new Date();
//     const isWithinPast6Months =
//       currentDate - saleDate <= SIX_MONTHS_IN_MILLISECONDS;

//     if (isWithinPast6Months) {
//       return {
//         color: "red",
//         fillColor: "lightpink",
//         fillOpacity: 0.6,
//         weight: 1,
//       };
//     } else {
//       return {
//         color: "blue",
//         fillColor: "lightblue",
//         fillOpacity: 0.6,
//         weight: 1,
//       };
//     }
//   };

//   const onEachFeature = (feature, layer) => {
//     const { label, owner, address, currentPrice, saleDate } =
//       feature.properties.data;
//     layer.bindPopup(
//       `<div>
//         <h4>${label}</h4>
//         <p><strong>Owner:</strong> ${owner}</p>
//         <p><strong>Address:</strong> ${address}</p>
//         <p><strong>Current Price:</strong> ${currentPrice}</p>
//         <p><strong>Sale Date:</strong> ${saleDate}</p>
//       </div>`
//     );
//   };

//   return (
//     <>
//       {showShapes && (
//         <GeoJSON
//           data={shapesData.features}
//           style={getStyleForFeature}
//           onEachFeature={onEachFeature}
//         />
//       )}
//     </>
//   );
// };

// export default MyShapes;

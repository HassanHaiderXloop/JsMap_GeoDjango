// GeoJSON data with shapes
const shapesData = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        id: 5,
        data: {
          label: "Hexagon",
          owner: "Hassan",
          address: "Address 1",
          currentPrice: "$1,000,000",
        },
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [67.032, 24.805],
            [67.0322, 24.8055],
            [67.0318, 24.8057],
            [67.0315, 24.8053],
            [67.0317, 24.8048],
            [67.032, 24.805],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        id: 6,
        data: {
          label: "Hexagon",
          owner: "Haider",
          address: "Address 2",
          currentPrice: "$1,100,000",
        },
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [67.03024, 24.80396],
            [67.03035, 24.80391],
            [67.03045, 24.80386],
            [67.03034, 24.80367],
            [67.03014, 24.80376],
            [67.03024, 24.80395],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        id: 7,
        data: {
          label: "Zia",
          owner: "Owner 3",
          address: "Address 3",
          currentPrice: "$1,200,000",
          saleDate: "2023-03-11",
        },
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [67.034, 24.807],
            [67.0342, 24.8075],
            [67.0338, 24.8077],
            [67.0335, 24.8073],
            [67.0337, 24.8068],
            [67.034, 24.807],
          ],
        ],
      },
    },
    {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            id: 7,
            data: {
              label: "Zia",
              owner: "Owner 3",
              address: "Address 3",
              currentPrice: "$1,200,000",
              saleDate: "2023-05-16",
            },
          },
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [67.03116314902445, 24.805306988436982],
                [67.03107503783235, 24.805160727099803],
                [67.03121386263237, 24.80509128930801],
                [67.03130243653663, 24.80523863727325],
                [67.03116314902445, 24.805306988436982],
              ],
            ],
          },
        },
        {
          type: "Feature",
          properties: {
            id: 7,
            data: {
              label: "Zia",
              owner: "Owner 3",
              address: "Address 3",
              currentPrice: "$1,200,000",
            },
          },
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [67.0310034653032, 24.805385160900755],
                [67.03091507697869, 24.80523757304266],
                [67.03105523286925, 24.805169174364053],
                [67.03114285426693, 24.805315369965214],
                [67.0310034653032, 24.805385160900755],
              ],
            ],
          },
        },
        {
          type: "Feature",
          properties: {
            id: 7,
            data: {
              label: "Zia",
              owner: "Owner 3",
              address: "Address 3",
              currentPrice: "$1,200,000",
            },
          },
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [67.03083473700451, 24.805459034357824],
                [67.03074581682884, 24.805312712553288],
                [67.03088566630146, 24.805243634419895],
                [67.03097396610369, 24.805391082579135],
                [67.03083473700451, 24.805459034357824],
              ],
            ],
          },
        },
      ],
    },
    {
      type: "Feature",
      properties: {
        id: 8,
        data: {
          label: "Waqar",
          owner: "Owner 8",
          address: "Address 8",
          currentPrice: "$1,800,000",
        },
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [67.035, 24.808],
            [67.0352, 24.8085],
            [67.0348, 24.8087],
            [67.0345, 24.8083],
            [67.0347, 24.8078],
            [67.035, 24.808],
          ],
        ],
      },
    },

    // Hexagon 9
    {
      type: "Feature",
      properties: {
        id: 9,
        data: {
          label: "Hunain",
          owner: "Owner 9",
          address: "Address 9",
          currentPrice: "$1,900,000",
        },
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [67.036, 24.809],
            [67.0362, 24.8095],
            [67.0358, 24.8097],
            [67.0355, 24.8093],
            [67.0357, 24.8088],
            [67.036, 24.809],
          ],
        ],
      },
    },

    // Hexagon 10
    {
      type: "Feature",
      properties: {
        id: 10,
        data: {
          label: "Ali",
          owner: "Owner 10",
          address: "Address 10",
          currentPrice: "$2,000,000",
        },
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [67.037, 24.81],
            [67.0372, 24.8105],
            [67.0368, 24.8107],
            [67.0365, 24.8103],
            [67.0367, 24.8098],
            [67.037, 24.81],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        id: 11,
        data: {
          label: "Hira",
          owner: "Owner 11",
          address: "Address 11",
          currentPrice: "$2,100,000",
        },
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [67.038, 24.811],
            [67.0382, 24.8115],
            [67.0378, 24.8117],
            [67.0375, 24.8113],
            [67.0377, 24.8108],
            [67.038, 24.811],
          ],
        ],
      },
    },

    // Hexagon 12
    {
      type: "Feature",
      properties: {
        id: 12,
        data: {
          label: "Wasay",
          owner: "Owner 12",
          address: "Address 12",
          currentPrice: "$2,200,000",
        },
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [67.039, 24.812],
            [67.0392, 24.8125],
            [67.0388, 24.8127],
            [67.0385, 24.8123],
            [67.0387, 24.8118],
            [67.039, 24.812],
          ],
        ],
      },
    },

    // Hexagon 13
    {
      type: "Feature",
      properties: {
        id: 13,
        data: {
          label: "Hexagon",
          owner: "Noor",
          address: "Address 13",
          currentPrice: "$2,300,000",
        },
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [67.04, 24.813],
            [67.0402, 24.8135],
            [67.0398, 24.8137],
            [67.0395, 24.8133],
            [67.0397, 24.8128],
            [67.04, 24.813],
          ],
        ],
      },
    },

    // Hexagon 14
    {
      type: "Feature",
      properties: {
        id: 14,
        data: {
          label: "Hexagon",
          owner: "Anoosh",
          address: "Address 14",
          currentPrice: "$2,400,000",
        },
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [67.041, 24.814],
            [67.0412, 24.8145],
            [67.0408, 24.8147],
            [67.0405, 24.8143],
            [67.0407, 24.8138],
            [67.041, 24.814],
          ],
        ],
      },
    },

    // Hexagon 15
    {
      type: "Feature",
      properties: {
        id: 15,
        data: {
          label: "Hexagon",
          owner: "Mohsin",
          address: "Address 15",
          currentPrice: "$2,500,000",
        },
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [67.042, 24.815],
            [67.0422, 24.8155],
            [67.0418, 24.8157],
            [67.0415, 24.8153],
            [67.0417, 24.8148],
            [67.042, 24.815],
          ],
        ],
      },
    },

    // Hexagon 16
    {
      type: "Feature",
      properties: {
        id: 16,
        data: {
          label: "Hexagon",
          owner: "Mufaddal",
          address: "Address 16",
          currentPrice: "$2,600,000",
        },
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [67.043, 24.816],
            [67.0432, 24.8165],
            [67.0428, 24.8167],
            [67.0425, 24.8163],
            [67.0427, 24.8158],
            [67.043, 24.816],
          ],
        ],
      },
    },

    // Hexagon 17
    {
      type: "Feature",
      properties: {
        id: 17,
        data: {
          label: "Hexagon",
          owner: "Ashar",
          address: "Address 17",
          currentPrice: "$2,700,000",
        },
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [67.044, 24.817],
            [67.0442, 24.8175],
            [67.0438, 24.8177],
            [67.0435, 24.8173],
            [67.0437, 24.8168],
            [67.044, 24.817],
          ],
        ],
      },
    },

    // Hexagon 18
    {
      type: "Feature",
      properties: {
        id: 18,
        data: {
          label: "Hexagon",
          owner: "Shah",
          address: "Address 18",
          currentPrice: "$2,800,000",
        },
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [67.045, 24.818],
            [67.0452, 24.8185],
            [67.0448, 24.8187],
            [67.0445, 24.8183],
            [67.0447, 24.8178],
            [67.045, 24.818],
          ],
        ],
      },
    },

    // Hexagon 19
    {
      type: "Feature",
      properties: {
        id: 19,
        data: {
          label: "Hexagon",
          owner: "Afnan",
          address: "Address 19",
          currentPrice: "$2,900,000",
        },
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [67.046, 24.819],
            [67.0462, 24.8195],
            [67.0458, 24.8197],
            [67.0455, 24.8193],
            [67.0457, 24.8188],
            [67.046, 24.819],
          ],
        ],
      },
    },

    // Hexagon 20
    {
      type: "Feature",
      properties: {
        id: 20,
        data: {
          label: "Hexagon",
          owner: "Usama",
          address: "Address 20",
          currentPrice: "$3,000,000",
        },
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [67.047, 24.82],
            [67.0472, 24.8205],
            [67.0468, 24.8207],
            [67.0465, 24.8203],
            [67.0467, 24.8198],
            [67.047, 24.82],
          ],
        ],
      },
    },
    // ... (continue with more hexagons, incrementing the ID and providing unique data)
  ],
};

export default shapesData;

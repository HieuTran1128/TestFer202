import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AnimalCard from "./components/AnimalCard";

function App() {
  const animalData = [
    {
      name: "Lion",
      scientificName: "Panthero leo",
      size: 140,
      diet: ["meat"],
      additional: {
        notes: "No Additional Information",
        link: "No Additional Information",
      },
      imageUrl: "./img/sutu.jpg",
    },
    {
      name: "Gorilla",
      scientificName: "Gorilla beringei",
      size: 205,
      diet: ["plants", "insects"],
      additional: {
        notes:
          "This is the eastern gorilla. There is also a western gorilla that is a different species.",
        link: "No Additional Information",
      },
      imageUrl: "./img/tinhtinh.jpg",
    },
    {
      name: "Zebra",
      scientificName: "Equus quagga",
      size: 322,
      diet: ["plants"],
      additional: {
        notes: "There are three different species of zebra.",
        link: "No Additional Information",
      },
      imageUrl: "./img/ngua.jpg",
    },
  ];

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: "20px",
  };

  return (
    <div className="App">
      <h1 className="text-center my-4" style={{ color: "#000000" }}>
        Animals
      </h1>
      <div style={containerStyle}>
        {animalData.map((animal, index) => (
          <AnimalCard
            key={index}
            name={animal.name}
            scientificName={animal.scientificName}
            size={animal.size}
            diet={animal.diet}
            additional={animal.additional}
            imageUrl={animal.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

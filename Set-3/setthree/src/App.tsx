import "./App.css";
import CharacterBasedOnSuperpower from "./components/CharacterBasedOnSuperpower";
import Charaters from "./components/Charaters";
import Image from "./components/Image";
import NamesOfCharaters from "./components/NamesOfCharacters";
import VegetablesList from "./components/VegetablesList";

const cartoons = [
  {
    id: 1,
    name: "Mickey Mouse",
    superpower: "Invisibility",
    magnitude: 1,
  },
  {
    id: 2,
    name: "Spongebob Squarepants",
    superpower: "Super Strength",
    magnitude: 3,
  },
  {
    id: 3,
    name: "Bugs Bunny",
    superpower: "Teleportation",
    magnitude: 9,
  },
  {
    id: 4,
    name: "Tom and Jerry",
    superpower: "Intelligence",
    magnitude: 8,
  },
  {
    id: 5,
    name: "The Powerpuff Girls",
    superpower: "Flight",
    magnitude: 10,
  },
];

const vegetables = [
  {
    id: 1,
    name: "Carrots",
    pickDate: "2023-03-25",
  },
  {
    id: 2,
    name: "Broccoli",
    pickDate: "2023-03-30",
  },
  {
    id: 3,
    name: "Peppers",
    pickDate: "2023-03-25",
  },
  {
    id: 4,
    name: "Tomatoes",
    pickDate: "2023-03-27",
  },
  {
    id: 5,
    name: "Ladies Finger",
    pickDate: "2023-03-30",
  },
];

const bouquet = [
  {
    id: 1,
    flowers: ["rose", "lily", "marigold"],
    totalFlowers: 9,
    price: 1400,
  },
  {
    id: 2,
    flowers: ["snapdragon", "sunflower"],
    totalFlowers: 10,
    price: 3400,
  },
];

function App() {
  return (
    <>
      <Image
        imageLink="https://picsum.photos/200"
        height={"200px"}
        width={"300px"}
      />

      <Charaters cartoons={cartoons} />
      <NamesOfCharaters cartoons={cartoons} />
      <CharacterBasedOnSuperpower
        cartoons={cartoons}
        superpower="Intelligence"
      />

      <VegetablesList vegetables={vegetables} />
    </>
  );
}

export default App;

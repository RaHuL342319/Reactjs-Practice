import { useState } from "react";

type Character = {
  name: string;
  powers: string;
  costume: string;
};

type Props = {
  characters: {
    heroes: Character[];
    villains: Character[];
  };
};

const Tab = ({ characters }: Props) => {
  const [showHeroes, setShowHeroes] = useState<Boolean>(false);
  const [showVillains, setShowVillains] = useState<Boolean>(false);
  return (
    <div style={{ marginBottom: "10px" }}>
      <div style={{ marginBottom: "10px" }}>
        <button
          style={{ padding: "6px", marginRight: "10px" }}
          onClick={() => setShowHeroes((prev) => !prev)}
        >
          {showHeroes ? "Hide Heroes" : "Show Heroes"}
        </button>
        <button
          style={{ padding: "6px", marginRight: "10px" }}
          onClick={() => setShowVillains((prev) => !prev)}
        >
          {showVillains ? "Hide Villains" : "Show Villains"}
        </button>
      </div>
      <div>
        {showHeroes && (
          <div>
            <h1>Heroes : </h1>
            <ul>
              {characters.heroes.map((hero, idx) => (
                <li key={idx} style={{ listStyle: "none" }}>
                  <h3>{hero.name}</h3>
                  <p>Powers: {hero.powers}</p>
                  <p>Costume: {hero.costume}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        {showVillains && (
          <div>
            <h1>Villains: </h1>
            <ul>
              {characters.villains.map((villain, idx) => (
                <li key={idx} style={{ listStyle: "none" }}>
                  <h3>{villain.name}</h3>
                  <p>Powers: {villain.powers}</p>
                  <p>Costume: {villain.costume}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tab;

import { useState } from "react";

type Veg = {
  id: number;
  name: string;
  pickDate: string;
};
type Props = {
  vegetables: Veg[];
};

const VegetablesList = ({ vegetables }: Props) => {
  const [highlight, setHighlight] = useState(false);
  return (
    <div style={{ border: "1px solid", marginTop: "10px" }}>
      <h3>Highlight Fresh Vegetables</h3>

      <ol>
        {vegetables.map((veg) => (
          <li
            key={veg.id}
            style={{
              color:
                highlight && veg.pickDate === "2023-03-30" ? "green" : "black",
            }}
          >
            {veg.name} - {veg.pickDate}
          </li>
        ))}
      </ol>
      <button onClick={() => setHighlight(true)}>
        Highlight Fresh Vegetables
      </button>
    </div>
  );
};

export default VegetablesList;

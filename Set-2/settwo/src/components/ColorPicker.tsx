import { useState } from "react";

type Props = {
  red: string;
  blue: string;
  green: string;
};

const ColorPicker = ({ red, blue, green }: Props) => {
  const [showRedHex, setShowRedHex] = useState(false);
  const [showBlueHex, setShowBlueHex] = useState(false);
  const [showGreenHex, setShowGreenHex] = useState(false);

  return (
    <div>
      <div>
        <button
          style={{ padding: "20px", margin: "20px" }}
          onClick={() => setShowRedHex((prev) => !prev)}
        >
          Red Colour
        </button>
        {showRedHex && <p style={{ color: "red", padding: "20px" }}>{red}</p>}
      </div>

      <div>
        <button
          style={{ padding: "20px", margin: "20px" }}
          onClick={() => setShowBlueHex((prev) => !prev)}
        >
          Blue Colour
        </button>
        {showBlueHex && (
          <p style={{ color: "blue", padding: "20px" }}>{blue}</p>
        )}
      </div>

      <div>
        <button
          style={{ padding: "20px", margin: "20px" }}
          onClick={() => setShowGreenHex((prev) => !prev)}
        >
          Green Colour
        </button>
        {showGreenHex && (
          <p style={{ color: "green", padding: "20px" }}>{green}</p>
        )}
      </div>
    </div>
  );
};

export default ColorPicker;

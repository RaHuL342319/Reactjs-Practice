import { useState } from "react";

const FontResizer = () => {
  const [font, setFont] = useState<number>(18);
  return (
    <div style={{ marginBottom: "10px" }}>
      <p style={{ fontSize: `${font}px` }}>Welcome</p>
      <button
        style={{ padding: "6px 10px", marginRight: "10px" }}
        onClick={() => setFont((prev) => prev - 1)}
      >
        -
      </button>
      <button
        style={{ padding: "6px 10px", marginLeft: "10px" }}
        onClick={() => setFont((prev) => prev + 1)}
      >
        +
      </button>
    </div>
  );
};

export default FontResizer;

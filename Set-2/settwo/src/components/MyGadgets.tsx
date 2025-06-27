import { useState } from "react";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
};

type Props = {
  products: Product[];
};

const MyGadgets = ({ products }: Props) => {
  const [highlightExpensive, setHighlightExpensive] = useState(false);
  return (
    <div style={{ border: "1px solid", marginTop: "20px" }}>
      <h1>Products Details</h1>
      <ol>
        {products.map(({ id, name, description, price }) => {
          return (
            <li
              key={id}
              style={{
                backgroundColor:
                  price > 50000 && highlightExpensive ? "lightgreen" : "",
              }}
            >
              Name: {name}, Description: {description}, Price: {price}
            </li>
          );
        })}
      </ol>
      <button onClick={() => setHighlightExpensive((prev) => !prev)}>
        {highlightExpensive
          ? "Remove Highlight Expensive Gadget"
          : "Highlight Expensive Gadget"}
      </button>
    </div>
  );
};

export default MyGadgets;

import { useState } from "react";

type Item = {
  id: number;
  name: string;
  category: string;
};

type Props = {
  itemList: Item[];
};

const TabsGrocery = ({ itemList }: Props) => {
  const [items, setItems] = useState(itemList);

  const handleItemsBasedOnSelection = (select: string) => {
    if (select === "All") {
      setItems(itemList);
    } else {
      setItems(itemList.filter((item) => item.category === select));
    }
  };

  return (
    <div style={{ marginBottom: "10px" }}>
      <div style={{ marginTop: "10px" }}>
        <button
          style={{ padding: "6px", marginRight: "10px" }}
          onClick={() => handleItemsBasedOnSelection("All")}
        >
          All
        </button>
        <button
          style={{ padding: "6px", marginRight: "10px" }}
          onClick={() => handleItemsBasedOnSelection("Vegetable")}
        >
          Vegetables
        </button>
        <button
          style={{ padding: "6px", marginRight: "10px" }}
          onClick={() => handleItemsBasedOnSelection("Fruit")}
        >
          Fruits
        </button>
      </div>

      <div style={{ marginTop: "10px" }}>
        <ul>
          {items.map((item) => (
            <li
              key={item.id}
              style={{
                color:
                  item.category === "Fruit"
                    ? "goldenrod"
                    : item.category === "Vegetable"
                    ? "green"
                    : "black",
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TabsGrocery;

import { useEffect, useState } from "react";
import { fakeFetch } from "../api/fakeFetch1";
type Product = {
  name: string;
  price: number;
  desc: string;
  src: string;
};
const Products = () => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const fetchData = async () => {
    try {
      const res = (await fakeFetch("https://example.com/api/products")) as {
        status: number;
        message: string;
        data: any;
      };
      const { status, message, data } = res;
      if (status === 200 && message === "Success") {
        setProducts(data.products);
        setSelectedIndex(0); // Show first product by default
      }
    } catch (err: any) {
      console.error("Error during fetching products", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!products) return <div>No products found.</div>;

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px" }}>
      <div>
        {products.map((_, idx) => (
          <button
            key={idx}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginRight: "5px",
              color: selectedIndex === idx ? "red" : "black", // Highlight selected button
            }}
            onClick={() => {
              setSelectedIndex(idx);
            }}
          >
            Show {_.name}
          </button>
        ))}
      </div>
      {selectedIndex !== null && (
        <div
          style={{
            marginTop: "1rem",
            border: "1px solid #ccc",
            padding: "1rem",
          }}
        >
          <h3>{products[selectedIndex].name}</h3>
          <img
            src={products[selectedIndex].src}
            alt={products[selectedIndex].name}
            width={150}
          />
          <p>{products[selectedIndex].desc}</p>
          <p>Price: ₹{products[selectedIndex].price}</p>
        </div>
      )}
    </div>
  );
};

export default Products;

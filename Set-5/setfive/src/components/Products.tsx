import { useEffect, useState } from "react";
import { fakeFetch } from "../api/fakeFetch2";

type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};
const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const fetchData = async () => {
    try {
      const res: any = await fakeFetch("https://example.com/api/products");

      const { status } = res;
      const { products } = res.data;

      if (status === 200) {
        setProducts(products);
        console.log(products);
      }
    } catch (error: any) {
      console.error("Error fetching products:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = () => {
    const filteredProducts = products.filter(
      (product) => product.quantity > 20
    );
    setProducts(filteredProducts);
  };

  const handleFilter = () => {
    const filteredProducts = products.filter(({ price }) => price > 100);
    setProducts(filteredProducts);
  };

  return (
    <div>
      <h1>Products</h1>
      <div>
        <button
          onClick={handleClick}
          style={{ margin: "10px", padding: "10px" }}
        >
          Items with more than 20 quantity
        </button>
        <button
          onClick={handleFilter}
          style={{ margin: "10px", padding: "10px" }}
        >
          Filter by price greater than 100
        </button>
      </div>
      <ul>
        {products.map(({ id, name, price, quantity }) => {
          return (
            <li key={id}>
              {name} - Rs. {price} - Quantity: {quantity}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Products;

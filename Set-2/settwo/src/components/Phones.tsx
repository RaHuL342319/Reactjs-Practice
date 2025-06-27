type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
};
type Props = {
  products: Product[];
};
const Phones = ({ products }: Props) => {
  return (
    <div style={{ border: "1px solid", marginTop: "20px" }}>
      <h1>Phones List</h1>
      <ul>
        {products
          .filter((product) => product.name === "mobile")
          .map(({ id, name, description, price }) => {
            return (
              <li key={id}>
                Name: {name}, Description: {description}, Price: {price}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Phones;

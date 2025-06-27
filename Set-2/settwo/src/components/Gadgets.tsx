type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
};

type Props = {
  products: Product[];
};

const Gadgets = ({ products }: Props) => {
  return (
    <div style={{ border: "1px solid", marginTop: "20px" }}>
      <h1>Products Details</h1>
      <ul>
        {products.map(({ id, name, description, price }) => {
          return (
            <li
              key={id}
              style={{ border: price > 50000 ? "1px solid red" : "" }}
            >
              Name: {name}, Description: {description}, Price: {price}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Gadgets;

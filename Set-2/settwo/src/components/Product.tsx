type Props = {
  name: string;
  price: number;
};

const Product = ({ name, price }: Props) => {
  return (
    <div>
      <b style={{ color: "blue" }}>{name}</b> {" : "}
      <i style={{ color: "green" }}>{price}</i>
    </div>
  );
};

export default Product;

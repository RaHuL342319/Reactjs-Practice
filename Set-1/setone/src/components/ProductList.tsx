type Props = {
  products: {
    name: string;
    quantity: number;
    sales: number;
  }[];
};

const ProductList = ({ products }: Props) => {
  return (
    <div>
      <h1>Product Names</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

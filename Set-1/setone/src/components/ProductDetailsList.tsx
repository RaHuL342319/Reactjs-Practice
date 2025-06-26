type Props = {
  products: {
    name: string;
    quantity: number;
    sales: number;
  }[];
};

const ProductDetailsList = ({ products }: Props) => {
  return (
    <div>
      <h1>Products List Details</h1>
      <ul>
        {products.map(({ name, quantity, sales }) => {
          return (
            <li>
              Name: {name}, Qunatity: {quantity}, Sales: {sales}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductDetailsList;

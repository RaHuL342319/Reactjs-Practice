type Flowers = {
  id: number;
  flowers: string[];
  totalFlowers: number;
  price: number;
};
type Props = {
  bouquet: Flowers[];
};

const BouquetPrice = ({ bouquet }: Props) => {
  return (
    <div style={{ marginTop: "10px", border: "1px solid" }}>
      <b> price of that bouquet that has rose in it: </b>
      <ul>
        {bouquet
          .filter(({ flowers }) => flowers.includes("rose"))
          .map((item) => (
            <li>Price of bouquet with roses : {item.price}</li>
          ))}
      </ul>
    </div>
  );
};

export default BouquetPrice;

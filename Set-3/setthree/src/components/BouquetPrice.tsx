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
    <div>
      <h3> price of that bouquet that has rose in it: </h3>
      <ul>{}</ul>
    </div>
  );
};

export default BouquetPrice;

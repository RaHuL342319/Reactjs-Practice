type Flowers = {
  id: number;
  flowers: string[];
  totalFlowers: number;
  price: number;
};
type Props = {
  bouquet: Flowers[];
};

const DisplayFlowersInBouquet = ({ bouquet }: Props) => {
  return (
    <div style={{ marginTop: "10px", border: "1px solid" }}>
      <b> display the flowers of a bouquet has price above 2000: </b>
      <ol>
        {bouquet
          .filter(({ price }) => price > 2000)
          .map((item) =>
            item.flowers.map((flower, index) => <li key={index}>{flower}</li>)
          )}
      </ol>
    </div>
  );
};

export default DisplayFlowersInBouquet;

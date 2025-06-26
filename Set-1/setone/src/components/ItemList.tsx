type Props = {
  itemHeader: string;
  items: string[];
};

const ItemList = ({ itemHeader, items }: Props) => {
  return (
    <div>
      <h2>{itemHeader}</h2>
      <ul>
        {items.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default ItemList;

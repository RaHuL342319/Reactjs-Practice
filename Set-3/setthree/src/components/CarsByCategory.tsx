type Car = {
  id: number;
  name: string;
  price: number;
  category: string;
};

type Props = {
  cars: Car[];
};

const categoryCount = (cars: Car[]) =>
  cars.reduce((acc: Record<string, number>, curr: Car) => {
    acc[curr.category] = (acc[curr.category] || 0) + 1;
    return acc;
  }, {});

const CarsByCategory = ({ cars }: Props) => {
  return (
    <div style={{ marginTop: "10px", border: "1px solid" }}>
      <b>Cars by Category:</b>
      <ul>
        {Object.entries(categoryCount(cars)).map(([category, count]) => (
          <li key={category}>
            {category}: {count}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarsByCategory;

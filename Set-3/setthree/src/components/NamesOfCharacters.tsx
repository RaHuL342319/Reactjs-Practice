type Cartoon = {
  id: number;
  name: string;
  superpower: string;
  magnitude: number;
};

type Props = {
  cartoons: Cartoon[];
};

const NamesOfCharaters = ({ cartoons }: Props) => {
  return (
    <div style={{ border: "1px solid", marginTop: "10px" }}>
      <h1 style={{ color: "red" }}>
        names of characters whose magnitude is an even number:{" "}
      </h1>

      <ul>
        {cartoons
          .filter((cartoon) => cartoon.magnitude % 2 === 0)
          .map(({ id, name }: Cartoon) => {
            return (
              <li key={id}>
                <h1>{name}</h1>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default NamesOfCharaters;

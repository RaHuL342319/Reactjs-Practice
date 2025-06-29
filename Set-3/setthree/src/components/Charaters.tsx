type Cartoon = {
  id: number;
  name: string;
  superpower: string;
  magnitude: number;
};

type Props = {
  cartoons: Cartoon[];
};

const Charaters = ({ cartoons }: Props) => {
  return (
    <div style={{ border: "1px solid" }}>
      <h3>Charaters,whose magnitude is greater than 5: </h3>

      <ul>
        {cartoons
          .filter((cartoon) => cartoon.magnitude > 5)
          .map(({ id, name, superpower, magnitude }: Cartoon) => {
            return (
              <li key={id}>
                <b>Name: {name}</b>
                <p>Superpower: {superpower}</p>
                <p>Magnitude: {magnitude}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Charaters;

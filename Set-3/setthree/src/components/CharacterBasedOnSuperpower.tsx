type Cartoon = {
  id: number;
  name: string;
  superpower: string;
  magnitude: number;
};

type Props = {
  cartoons: Cartoon[];
  superpower: string;
};

const CharacterBasedOnSuperpower = ({ cartoons, superpower }: Props) => {
  return (
    <div style={{ border: "1px solid" }}>
      <h3>Charaters based on their superpower: </h3>

      <ul>
        {cartoons
          .filter((cartoon) => cartoon.superpower === superpower)
          .map(({ id, name, superpower, magnitude }: Cartoon) => {
            return (
              <li key={id}>
                <b>
                  {name} - {superpower} - {magnitude}
                </b>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default CharacterBasedOnSuperpower;

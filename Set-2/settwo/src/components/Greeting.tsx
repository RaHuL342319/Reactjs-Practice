type Props = {
  name: string;
};

const Greeting = ({ name }: Props) => {
  return (
    <h1 style={{ backgroundColor: "red", color: "white" }}>Hello, {name}!</h1>
  );
};

export default Greeting;

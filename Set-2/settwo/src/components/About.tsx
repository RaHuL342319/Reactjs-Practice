import { useState } from "react";

type Props = {
  heading: string;
  name: string;
  learning: string;
};

const About = ({ heading, learning, name }: Props) => {
  const [showLearning, setShowLearning] = useState(false);

  const handleShowMore = () => {
    setShowLearning((prev) => !prev);
  };
  return (
    <div style={{ border: "1px solid green", marginTop: "20px" }}>
      <h1>{heading}</h1>
      <h2>{name}</h2>
      <button onClick={handleShowMore}>
        {showLearning ? "Show less" : "Show more"}
      </button>
      {showLearning && <p>{learning}</p>}
    </div>
  );
};

export default About;

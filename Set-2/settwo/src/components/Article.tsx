import { useState } from "react";

type Props = {
  title: string;
  content: string;
};

const Article = ({ title, content }: Props) => {
  const [showContent, setShowContent] = useState(false);

  const handleShowMore = () => {
    setShowContent((prev) => !prev);
  };
  return (
    <div style={{ border: "1px solid red", marginTop: "20px" }}>
      <h1>{title}</h1>
      <button onClick={handleShowMore}>
        {showContent ? "Show less" : "Show more"}
      </button>
      {showContent && <p>{content}</p>}
    </div>
  );
};

export default Article;

import { useEffect, useState } from "react";
import { fakeFetch } from "../api/fakeFetch5";

type Quote = {
  content: string;
  author: string;
};

const RandomQuotes = () => {
  const [randomQuote, setRandomQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = (await fakeFetch()) as Quote;
      setRandomQuote(data);
    } catch (error: any) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!randomQuote) {
    return <p>No Quotes Found!!</p>;
  }

  const handleRandomQuote = () => {
    fetchData();
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px" }}>
      <h1>Random Quote Generator</h1>
      <p>{`"${randomQuote?.content}"`}</p>
      <p>-{randomQuote?.author}</p>
      <button onClick={handleRandomQuote}>New Quote</button>
    </div>
  );
};

export default RandomQuotes;

import { useEffect, useState } from "react";
import { fakeFetch } from "../api/fakeFetch6";

type Comment = {
  name: string;
  text: string;
};
const Comments = () => {
  const [userData, setUserData] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res: any = await fakeFetch("https://example.com/api/comments");
      const { status, data } = res;
      console.log(status, data);
      if (status === 200) {
        setUserData(data.comments);
      }
    } catch (error: any) {
      console.error("Error fetching comments data:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userData || userData.length === 0) {
    return <div>No comments found.</div>;
  }

  const handleDelete = (index: number) => {
    setUserData((prevComments) => prevComments.filter((_, i) => i !== index));
  };

  return (
    <>
      <h1>Comments:</h1>
      <ul>
        {userData.map(({ name, text }, index) => (
          <li key={index}>
            <strong>{name}:</strong>
            <p>{text}</p>
            <button onClick={() => handleDelete(index)}>delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Comments;

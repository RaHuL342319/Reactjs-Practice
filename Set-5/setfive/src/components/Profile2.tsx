import { useEffect, useState } from "react";
import { fakeFetch } from "../api/fakeFetch4";

type User = {
  name: string;
  image: string;
  likes: number;
  comments: number;
};
const Profile2 = () => {
  const [userData, setUserData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res: any = await fakeFetch("https://example.com/api/users");
      const { status, data } = res;
      if (status === 200) {
        setUserData(data);
      }
    } catch (error: any) {
      console.error("Error fetching profile data:", error.message);
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

  if (!userData) {
    return <div>No user data found.</div>;
  }

  return (
    <div className="profile">
      <h1>Users</h1>
      {userData.map(({ name, image, likes, comments }, index) => (
        <div key={index} className="profile-details">
          <img src={image} alt="User" />
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Likes:</strong> {likes}
          </p>
          <p>
            <strong>Comments:</strong> {comments}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Profile2;

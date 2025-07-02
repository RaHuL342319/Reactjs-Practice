import { useEffect, useState } from "react";
import { fakeFetch } from "../api/fakeFetch3";

type User = {
  name: string;
  image: string;
  likes: number;
  comments: number;
};
const Profile = () => {
  const [userData, setUserData] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res: any = await fakeFetch("https://example.com/api/user");
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
      <h1>User Profile</h1>
      <div className="profile-details">
        <img src={userData.image} alt="image" />
        <p>
          <strong>Name:</strong> {userData.name}
        </p>
        <p>
          <strong>Likes:</strong> {userData.likes}
        </p>
        <p>
          <strong>Comments:</strong> {userData.comments}{" "}
        </p>
      </div>
    </div>
  );
};

export default Profile;

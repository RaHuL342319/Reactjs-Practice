import { useEffect, useState } from "react";
import { fakeFetch } from "../api/fakeFetch5";

type UserChat = {
  name: string;
  messages: {
    from: string;
    message: string;
  }[];
};
const UsersChat = () => {
  const [userData, setUserData] = useState<UserChat[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res: any = await fakeFetch("https://example.com/api/userchat");
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
      <h1>User's Chat</h1>
      {userData.map(({ name, messages }, index) => (
        <ul key={index} className="profile-details">
          <li>
            {name}'s Chat:
            <ul>
              {messages.map((msg, msgIndex) => (
                <li key={msgIndex}>
                  <strong>{msg.from}:</strong> {msg.message}
                </li>
              ))}
            </ul>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default UsersChat;

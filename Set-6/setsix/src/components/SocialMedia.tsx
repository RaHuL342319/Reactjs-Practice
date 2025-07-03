import { useEffect, useState } from "react";
import { fakeFetch } from "../api/fakeFetch10";

type Profile = {
  name: string;
  age: number;
  gender: "male" | "female" | "others";
  email: string;
  occupation: string;
  followers: number;
  followedBy: number;
};

const SocialMedia = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [isFollowed, setIsFollowed] = useState(false);
  const fetchData = async () => {
    try {
      const res = (await fakeFetch("https://example.com/api/profile")) as {
        status: number;
        message: string;
        data: any;
      };
      const { status, message, data } = res;
      if (status === 200 && message === "Success") {
        setProfile(data.profile);
      }
    } catch (err: any) {
      console.error("Error during fetching products", err);
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

  if (!profile) {
    return <p>No Profile Available!</p>;
  }

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px" }}>
      <h1>{profile.name}</h1>
      <p style={{ lineHeight: "0.2" }}>
        <b>Age: </b>
        {profile.age} years
      </p>
      <p style={{ lineHeight: "0.2" }}>
        <b>Gender: </b>
        {profile.gender}
      </p>
      <p style={{ lineHeight: "0.2" }}>
        <b>Email: </b>
        {profile.email}
      </p>
      <p style={{ lineHeight: "0.2" }}>
        <b>Occupation: </b>
        {profile.occupation}
      </p>
      <p style={{ lineHeight: "0.2" }}>
        <b>Followers: </b>
        {profile.followers}
      </p>
      <p style={{ lineHeight: "0.2" }}>
        <b>Followed By: </b>
        {profile.followedBy}
      </p>
      <button
        disabled={isFollowed}
        onClick={() => {
          setProfile((prev) =>
            prev ? { ...prev, followers: prev.followers + 1 } : prev
          );
          setIsFollowed(true);
        }}
      >
        Follow {profile.name}
      </button>
    </div>
  );
};

export default SocialMedia;

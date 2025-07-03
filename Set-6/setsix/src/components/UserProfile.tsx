import { useEffect, useState } from "react";
import { fakeFetch } from "../api/fakeFetch8";

type Profile = {
  name: string;
  email: string;
  age: number;
  gender: string;
  occupation: string;
};

const UserProfile = () => {
  const [profilesData, setProfilesData] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = (await fakeFetch("https://example.com/api/profile")) as {
        status: number;
        message: string;
        data: { profiles: Profile };
      };

      const { status, data } = res;
      if (status === 200) {
        setProfilesData(data.profiles);
        console.log(data.profiles);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return profilesData ? (
    <div style={{ border: "1px solid #ccc", padding: "20px" }}>
      <h1>Profiles</h1>
      <p>
        <b>Name: </b> {profilesData.name}
        <br />
        <b>Email: </b> {profilesData.email}
        <br />
        <b>Age:</b> {profilesData.age}
        <br />
        <b>Gender: </b> {profilesData.gender}
        <br />
        <b>Occupation: </b> {profilesData.occupation}
      </p>
      <button
        onClick={() => {
          setProfilesData({ ...profilesData, name: "Rahul" });
        }}
      >
        Update name
      </button>
    </div>
  ) : (
    <div>No Profile Found</div>
  );
};

export default UserProfile;

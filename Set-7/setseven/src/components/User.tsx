import { useEffect, useState } from "react";
import { fakeFetch } from "../api/fakeFetch2";
type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
};
type User = {
  name: string;
  email: string;
  phone: string;
  address: Address;
};
const User = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [toggle, setToggle] = useState(false);
  const fetchData = async () => {
    try {
      const res = (await fakeFetch("https://example.com/api/user")) as {
        status: number;
        message: string;
        data: any;
      };

      const { status, data } = res;

      if (status === 200) {
        setUser(data);
        // console.log(data);
      }
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

  if (!user) {
    return <p>No User Found!!</p>;
  }
  return (
    <div style={{ border: "1px solid #ccc", padding: "20px" }}>
      <h1>User</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>

      <button onClick={() => setToggle((prev) => !prev)}>
        {toggle ? "Hide Address" : "Show Address"}
      </button>
      {toggle && (
        <>
          <p>{user.address.street}</p>
          <p>{user.address.suite}</p>
          <p>{user.address.city}</p>
          <p>{user.address.zipcode}</p>
        </>
      )}
    </div>
  );
};

export default User;

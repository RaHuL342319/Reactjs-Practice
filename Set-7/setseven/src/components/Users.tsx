import { useEffect, useState } from "react";
import { fakeFetch } from "../api/fakeFetch4";

type User = {
  name: string;
  email: string;
  website: string;
  company: string;
};
const Users = () => {
  const [users, setUsers] = useState<User[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [filteredUsers, setFilteredUsers] = useState<User[] | null>(null);
  const [selectedCompany, setSelectedCompany] = useState<string>("all");
  const fetchData = async () => {
    try {
      const res = (await fakeFetch("https://example.com/api/users")) as {
        status: number;
        message: string;
        data: any;
      };

      const { status, data } = res;

      if (status === 200) {
        setUsers(data);
        setFilteredUsers(data);
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

  const companyNames: string[] | null = users
    ? Array.from(new Set(users.map((user: User) => user.company))).sort()
    : null;

  const handleCompanyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const company = e.target.value;
    setSelectedCompany(company);
    if (company === "all") {
      setFilteredUsers(users);
    } else {
      setFilteredUsers(
        users ? users.filter((user) => user.company === company) : []
      );
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!users) {
    return <p>No Users Found!!</p>;
  }

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px" }}>
      <h1>Users: </h1>
      <p>
        Filter by Company:
        <select value={selectedCompany} onChange={handleCompanyChange}>
          <option value="all">All Company</option>
          {companyNames?.map((company: string) => (
            <option key={company} value={company}>
              {company}
            </option>
          ))}
        </select>
      </p>

      <ul>
        {filteredUsers?.map((user: User, index: number) => {
          return (
            <li key={index}>
              <p>{user.name}</p>
              <p>{user.email}</p>
              <p>{user.website}</p>
              <p>{user.company}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Users;

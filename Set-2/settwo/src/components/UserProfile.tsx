type User = {
  name: string;
  age: number;
  email: string;
};
type Props = {
  userData: User;
};

const UserProfile = ({ userData }: Props) => {
  const { name, age, email } = userData;
  return (
    <div style={{ border: "1px solid", textAlign: "center" }}>
      <b>Name: {name}</b>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default UserProfile;

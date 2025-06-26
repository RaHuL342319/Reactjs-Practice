type EmployeeCardProps = {
  name: string;
  designation: string;
  workExperience: string;
};

const EmployeeCard = ({
  name,
  designation,
  workExperience,
}: EmployeeCardProps) => {
  return (
    <div>
      <h2>{name}</h2>
      <b style={{ color: "green" }}>{designation}</b>
      <p style={{ color: "blue" }}>Experience: {workExperience}</p>
    </div>
  );
};

export default EmployeeCard;

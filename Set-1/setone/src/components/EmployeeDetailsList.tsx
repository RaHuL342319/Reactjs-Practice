type Employee = {
  name: string;
  level: number;
  dept: string;
  designation: string;
  salary: number;
};

type Props = {
  employees: Employee[];
};

const EmployeeDetailsList = ({ employees }: Props) => {
  const totalSalary = (employees: Employee[]) => {
    return employees.reduce((acc, curr) => {
      acc += curr.salary;
      return acc;
    }, 0);
  };
  return (
    <div>
      <h1>Employee Details List</h1>
      <ul>
        {employees.map(({ name, level, dept, designation, salary }, index) => (
          <li
            key={index}
            style={{
              backgroundColor: level === 2 ? "orange" : "",
              border: designation === "President" ? "1px solid red" : "",
            }}
          >
            name: {name}, level: {level}, dept: {dept}, designation:{" "}
            {designation}, salary: {salary}
          </li>
        ))}
      </ul>
      <p>
        <b>Total Salary Expense: </b>
        {totalSalary(employees)}
      </p>
    </div>
  );
};

export default EmployeeDetailsList;

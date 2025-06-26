type Props = {
  student: {
    name: string;
    english: number;
    maths: number;
    computers: number;
  };
};

const StudentDetails = ({ student }: Props) => {
  const { name, maths, english, computers } = student;

  const findGrade = (total: number): string => {
    if (total >= 225) {
      return "A";
    } else if (total >= 180) {
      return "B";
    } else if (total >= 150) {
      return "C";
    }
    return "D";
  };

  return (
    <div>
      <h1>Student Details</h1>
      <p>Name: {name}</p>
      <p>English: {english}</p>
      <p>Maths: {maths}</p>
      <p>Computers: {computers}</p>
      <p>Total Marks: {english + maths + computers}</p>
      <p>Grade: {findGrade(english + maths + computers)}</p>
    </div>
  );
};

export default StudentDetails;

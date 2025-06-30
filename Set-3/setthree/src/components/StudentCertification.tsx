type Student = {
  id: number;
  name: string;
  marks: number;
};
type Props = { studentData: Student[] };

const StudentCertification = ({ studentData }: Props) => {
  const avgOfStudents = (students: Student[]) => {
    return (
      students.reduce((acc, curr) => {
        acc += curr.marks;
        return acc;
      }, 0) / students.length
    );
  };
  return (
    <div>
      {avgOfStudents(studentData) > 80
        ? "Cerification Approved"
        : "Certification Not Approved"}
    </div>
  );
};

export default StudentCertification;

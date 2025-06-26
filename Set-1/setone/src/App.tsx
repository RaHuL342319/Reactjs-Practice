import "./App.css";
import Button from "./components/Button";
import EmployeeCard from "./components/EmployeeCard";
import EmployeeDetailsList from "./components/EmployeeDetailsList";
import Image from "./components/Image";
import ItemList from "./components/ItemList";
import ProductDetailsList from "./components/ProductDetailsList";
import ProductList from "./components/ProductList";
import StudentDetails from "./components/StudentDetails";

const employeeDetails = {
  name: "Rahul Kumar",
  designation: "Senior Systems Engineer",
  workExperience: "3 Years",
};

const backgroundColor = "lightgreen";
const color = "darkgreen";
const borderRadius = "5px";
const padding = "10px";

const itemHeader = "Stationery Items";
const items = ["pen", "pencil", "ruler", "eraser"];

const imageLink =
  "https://cdn.pixabay.com/photo/2023/03/18/10/43/plum-blossoms-7860381_1280.jpg";
const caption = "Spring Flowers";

const products = [
  { name: "Perk", quantity: 10, sales: 7 },
  { name: "Pepsi", quantity: 10, sales: 20 },
  { name: "Coke", quantity: 18, sales: 50 },
  { name: "Maggi", quantity: 41, sales: 22 },
  { name: "5Star", quantity: 7, sales: 9 },
];

const student = {
  name: "John Doe",
  english: 90,
  maths: 80,
  computers: 70,
};

const employees = [
  {
    name: "Jack Smith",
    level: 2,
    dept: "Tech",
    designation: "Manager",
    salary: 24000,
  },
  {
    name: "Mary Robbins",
    level: 3,
    dept: "Fin",
    designation: "Manager",
    salary: 28000,
  },
  {
    name: "Steve Williams",
    level: 4,
    dept: "Ops",
    designation: "President",
    salary: 35000,
  },
  {
    name: "Bob Andrews",
    level: 1,
    dept: "Fin",
    designation: "Trainee",
    salary: 16500,
  },
  {
    name: "Dave Martin",
    level: 2,
    dept: "Fin",
    designation: "Manager",
    salary: 21700,
  },
  {
    name: "Julia Clarke",
    level: 3,
    dept: "Ops",
    designation: "Manager",
    salary: 26900,
  },
  {
    name: "Kathy Jones",
    level: 4,
    dept: "Tech",
    designation: "President",
    salary: 42500,
  },
  {
    name: "Tom Bresnan",
    level: 2,
    dept: "Tech",
    designation: "Manager",
    salary: 22200,
  },
];

function App() {
  return (
    <>
      <EmployeeCard {...employeeDetails} />
      <Button
        backgroundColor={backgroundColor}
        color={color}
        borderRadius={borderRadius}
        padding={padding}
      >
        Start
      </Button>
      <ItemList itemHeader={itemHeader} items={items} />
      <Image imageLink={imageLink} caption={caption} />
      <ProductList products={products} />
      <ProductDetailsList products={products} />
      <StudentDetails student={student} />
      <EmployeeDetailsList employees={employees} />
    </>
  );
}

export default App;

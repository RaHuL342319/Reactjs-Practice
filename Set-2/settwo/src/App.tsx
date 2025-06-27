import "./App.css";
import About from "./components/About";
import Article from "./components/Article";
import ColorPicker from "./components/ColorPicker";
import Gadgets from "./components/Gadgets";
import Greeting from "./components/Greeting";
import MyGadgets from "./components/MyGadgets";
import Phones from "./components/Phones";
import Product from "./components/Product";
import Todo from "./components/Todo";
import UserProfile from "./components/UserProfile";

const product = {
  name: "Bulb",
  price: 100,
};

const userData = {
  name: "John",
  age: 25,
  email: "john@example.com",
};

const products = [
  {
    id: 1,
    name: "keyboard",
    description: "Logitech Mechanical Keyboard",
    price: 2000,
  },
  { id: 2, name: "mouse", description: "Dell Wireless Mouse", price: 1200 },
  {
    id: 3,
    name: "monitor",
    description: "Lenovo 32-inch display Monitor",
    price: 10000,
  },
  { id: 4, name: "mobile", description: "iPhone 13 Pro Max", price: 140000 },
  {
    id: 5,
    name: "speakers",
    description: "Creative Desktop Speakers",
    price: 5000,
  },
  {
    id: 6,
    name: "headphones",
    description: "Sony over-the-ear wired Headphones with mic",
    price: 1500,
  },
  { id: 7, name: "mobile", description: "iPhone 12", price: 90000 },
];

const productsPhones = [
  {
    id: 1,
    name: "keyboard",
    description: "Logitech Mechanical Keyboard",
    price: 2000,
  },
  { id: 2, name: "mouse", description: "Dell Wireless Mouse", price: 1200 },
  { id: 3, name: "mobile", description: "iPhone 13", price: 61000 },
  {
    id: 4,
    name: "monitor",
    description: "Lenovo 32-inch display Monitor",
    price: 10000,
  },
  { id: 5, name: "mobile", description: "iPhone 13 Pro Max", price: 140000 },
  {
    id: 6,
    name: "speakers",
    description: "Creative Desktop Speakers",
    price: 5000,
  },
  {
    id: 7,
    name: "headphones",
    description: "Sony over-the-ear wired Headphones with mic",
    price: 1500,
  },
  { id: 8, name: "mobile", description: "iPhone 12", price: 90000 },
];

const title = "React is awesome";
const content = "React is a JavaScript library for building user interfaces.";

const heading = "About Me";
const name = "Rahul"; // you can put your name
const learning = "I am learning React JS.";

const red = "#EE4B2B";
const blue = "#89CFF0";
const green = "#7FFFD4";

const todoItems = [
  {
    id: 1,
    title: "Complete practice set",
    description: "Practice set 1 of React",
    isCompleted: true,
  },
  {
    id: 2,
    title: "Attend revision session",
    description: "Revision session of React",
    isCompleted: false,
  },
  {
    id: 3,
    title: "Watch recording",
    description: "Live session recording of React",
    isCompleted: true,
  },
  {
    id: 4,
    title: "Attend DSH",
    description: "Doubt Solving Hours of React",
    isCompleted: false,
  },
  {
    id: 5,
    title: "Complete practice set",
    description: "Practice set 2 of React",
    isCompleted: false,
  },
];

function App() {
  return (
    <>
      <Greeting name="Rahul" />
      <Product {...product} />
      <UserProfile userData={userData} />
      <Gadgets products={products} />
      <Phones products={productsPhones} />
      <Article title={title} content={content} />
      <About heading={heading} name={name} learning={learning} />
      <MyGadgets products={products} />
      <ColorPicker red={red} blue={blue} green={green} />
      <Todo todoItems={todoItems} />
    </>
  );
}

export default App;

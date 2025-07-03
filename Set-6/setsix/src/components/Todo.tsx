import { useEffect, useState } from "react";
import { fakeFetch } from "../api/fakeFetch2";

type Todo = {
  title: string;
  desc: string;
  todos: string[];
};

const Todo = () => {
  const [todos, setTodos] = useState<Todo[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      const res = (await fakeFetch("https://example.com/api/todos")) as {
        status: number;
        message: string;
        data: any;
      };
      const { status, message, data } = res;
      if (status === 200 && message === "Success") {
        setTodos(data.todos);
      }
    } catch (err: any) {
      console.error("Error during fetching products", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!todos) return <div>No todos!</div>;

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px" }}>
      <h1>Todos: </h1>
      <ul style={{ listStyle: "none" }}>
        {todos.map((todo: Todo, index) => (
          <li
            key={index}
            style={{
              paddingBottom: "10px",
              marginBottom: "5px",
              borderBottom: "1px solid #ccc",
            }}
          >
            <h1>
              {todo.title}: {todo.desc}
            </h1>
            <ol>
              {todo.todos.map((item) => {
                return <li key={item}>{item}</li>;
              })}
            </ol>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;

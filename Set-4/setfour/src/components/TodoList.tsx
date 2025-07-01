import { useState } from "react";

type Todo = {
  id: number;
  task: string;
  isDone: boolean;
};
type Props = {
  todoItems: Todo[];
};

const TodoList = ({ todoItems }: Props) => {
  const [todos, setTodos] = useState(todoItems);
  const handleRemove = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      <h1>Todo List:</h1>
      <ul>
        {todos.map((item) => {
          return (
            <li>
              <b
                key={item.id}
                style={{
                  textDecoration: item.isDone ? "line-through" : "",
                  marginRight: "10px",
                }}
              >
                {item.task}
              </b>
              <button
                onClick={() => {
                  handleRemove(item.id);
                }}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;

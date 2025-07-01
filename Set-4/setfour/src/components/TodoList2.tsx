import { useState } from "react";

type Todo = {
  id: number;
  task: string;
  isDone: boolean;
};
type Props = {
  todoItems: Todo[];
};

const TodoList2 = ({ todoItems }: Props) => {
  const [todos, setTodos] = useState(todoItems);

  const handleTaskComplete = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          todo.isDone = true;
        }
        return todo;
      })
    );
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
                  color: item.isDone ? "red" : "",
                  marginRight: "10px",
                }}
              >
                {item.task}
              </b>
              <button
                onClick={() => {
                  handleTaskComplete(item.id);
                }}
              >
                Mark as Done
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList2;

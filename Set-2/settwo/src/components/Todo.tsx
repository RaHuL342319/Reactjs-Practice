type Todo = {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
};
type Props = {
  todoItems: Todo[];
};

const Todo = ({ todoItems }: Props) => {
  return (
    <div style={{ border: "1px solid", padding: "20px" }}>
      <h1>Todo Item</h1>
      {todoItems.map((item) => (
        <div key={item.id} style={{ border: "1px solid blue" }}>
          <h3 style={{ color: item.isCompleted ? "green" : "red" }}>
            {item.title}
          </h3>
          <p style={{ color: item.isCompleted ? "green" : "red" }}>
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Todo;

import "./Todo.css";
const Todo = ({ id, title, completed, removeTodo, completeTodo }) => {
  return (
    <div className="Todo-div">
      <button onClick={() => removeTodo(id)}>🗑️</button>
      <li className={`Todo-todo ${completed ? "Todo-completed" : ""}`}>
        id: {id} || title: {title}
      </li>
      <button onClick={() => completeTodo(id)}>✔️</button>
    </div>
  );
};

export default Todo;

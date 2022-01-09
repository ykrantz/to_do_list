import { useState } from "react";
import "./Todo.css";
const Todo = ({
  id,
  title,
  date,
  time,
  completed,
  edit,
  removeTodo,
  completeTodo,
  editTodo,
}) => {
  const [todoEdited, setTodoEdited] = useState({
    id: id,
    title: title,
    date: date,
    time: time,
    completed: completed,
    edit: false,
  });

  // *******
  // 2 way data binding for inputs
  // ******
  const updateTodoEdited = (inputType, data) => {
    const newTodoEdited = { ...todoEdited };

    newTodoEdited[inputType] = data;
    setTodoEdited(newTodoEdited);
  };

  return (
    <div className="Todo-div">
      <button onClick={() => removeTodo(id)}>🗑️</button>
      <li
        className={`Todo-todo ${todoEdited.completed ? "Todo-completed" : ""}`}
      >
        <input
          type="text"
          onChange={(e) => updateTodoEdited("title", e.target.value)}
          value={todoEdited.title}
          disabled={!edit}
        ></input>
        <input
          type="date"
          onChange={(e) => updateTodoEdited("date", e.target.value)}
          value={new Date(todoEdited.date).toISOString().substring(0, 10)}
          disabled={!edit}
        ></input>
        <input
          type="time"
          onChange={(e) => updateTodoEdited("time", e.target.value)}
          value={todoEdited.time}
          disabled={!edit}
        ></input>
      </li>
      <button onClick={() => completeTodo(id)}>
        {completed ? "❌" : "✔️"}
      </button>
      <button onClick={() => editTodo(id, edit, todoEdited)}>✏️</button>
    </div>
  );
};

export default Todo;

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
    edit: edit,
  });
  const updateTodoEdited = (inputType, data) => {
    // console.log("SSS");
    // console.log(todoEdited);
    const newTodoEdited = { ...todoEdited };
    // console.log(newTodoEdited);

    newTodoEdited[inputType] = data;
    console.log(newTodoEdited);
    setTodoEdited(newTodoEdited);
  };

  return (
    <div className="Todo-div">
      <button onClick={() => removeTodo(id)}>🗑️</button>
      <li
        className={`Todo-todo ${todoEdited.completed ? "Todo-completed" : ""}`}
        // id={todoEdited.id}
        // title={todoEdited.title}
      >
        <input
          type="text"
          onChange={(e) => updateTodoEdited("title", e.target.value)}
          value={todoEdited.title}
          disabled={!todoEdited.edit}
        ></input>
        <input
          type="date"
          onChange={(e) => updateTodoEdited("date", e.target.value)}
          // defaultValue={new Date().toISOString().substring(0, 10)}
          // value={new Date(date).toISOString().substring(0, 10)}
          value={new Date(todoEdited.date).toISOString().substring(0, 10)}
          disabled={!todoEdited.edit}
        ></input>
        <input
          type="time"
          onChange={(e) => updateTodoEdited("time", e.target.value)}
          value={todoEdited.time}
          disabled={!todoEdited.edit}
        ></input>
        {/* id: {id} || title: {title} || date: {date.toLocaleDateString()} ||time:
        {time} */}
      </li>
      <button onClick={() => completeTodo(id)}>
        {completed ? "❌" : "✔️"}
      </button>
      {/* TODO: to fix disacled when prees */}
      <button onClick={() => editTodo(id, edit, todoEdited)}>✏️</button>
    </div>
  );
};

export default Todo;

import Todo from "../Todo/Todo";
import "./Todos.css";

const Todos = ({ todosList, removeTodo, completeTodo }) => {
  return (
    <ul>
      {todosList.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
        />
      ))}
    </ul>
  );
};

export default Todos;

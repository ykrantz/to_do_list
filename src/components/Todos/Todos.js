import Todo from "../Todo/Todo";
import "./Todos.css";

const Todos = ({ todosList, removeTodo, completeTodo, editTodo }) => {
  return (
    <ul>
      {todosList.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          title={todo.title}
          date={todo.date}
          time={todo.time}
          completed={todo.completed}
          edit={todo.edit}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
};

export default Todos;

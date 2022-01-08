import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Todos from "./components/Todos/Todos";
import { useEffect, useState } from "react";
import { logRoles } from "@testing-library/react";

function App() {
  const initTodosList = [
    { id: 1, title: "wash", completed: true },
    { id: 2, title: "run", completed: true },
    { id: 3, title: "buy", completed: false },
  ];
  const [todosList, setTodosList] = useState(initTodosList);
  const [todoCount, setTodoCount] = useState(initTodosList.length - 1);

  // update number of todo in header
  useEffect(() => setTodoCount(todosList.length), [todosList]);

  // remove to do
  const removeTodo = (idToRemove) => {
    const newToDoList = todosList.filter((todo) => todo.id !== idToRemove);
    setTodosList(newToDoList);
  };

  // make todo completed or uncompleted
  const completeTodo = (id) => {
    const newToDoList = todosList.map((todo) => {
      if (todo.id !== id) {
        return todo;
      } else {
        todo.completed = !todo.completed;
        return todo;
      }
    });
    setTodosList(newToDoList);
  };

  const [inputText, setInputValue] = useState("");

  const updateInputValue = (text) => {
    setInputValue(text);
  };

  // add todo to list
  const addTodo = (inputText) => {
    let newId = todosList.length + 1;
    const newToDoList = [
      ...todosList,
      { id: newId, title: inputText, completed: false },
    ];
    setTodosList(newToDoList);
  };

  return (
    <div className="App">
      <>
        <Header todoCount={todoCount} />
        {/* if no input text so button is disable */}
        <button onClick={() => addTodo(inputText)} disabled={inputText === ""}>
          add Todo
        </button>
        <div>
          <input
            type="text"
            onChange={(e) => updateInputValue(e.target.value)}
            value={inputText}
          ></input>
        </div>
        <Todos
          todosList={todosList}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
        />
      </>
    </div>
  );
}

export default App;

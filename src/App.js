import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Todos from "./components/Todos/Todos";
import { useState } from "react";

function App() {
  const initTodosList = [
    { id: 1, title: "wash", completed: true },
    { id: 2, title: "run", completed: true },
    { id: 3, title: "buy", completed: false },
  ];
  const [todosList, setTodosList] = useState(initTodosList);

  const removeTodo = (idToRemove) => {
    const newToDoList = todosList.filter((todo) => todo.id !== idToRemove);
    // const newToDoList = [
    //   { id: 2, title: "run", completed: true },
    //   { id: 3, title: "buy", completed: false },
    // ];
    setTodosList(newToDoList);
  };

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
        <Header />
        <button onClick={() => addTodo(inputText)}>add Todo</button>
        <input
          type="text"
          onChange={(e) => updateInputValue(e.target.value)}
          value={inputText}
        ></input>
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

import "./App.css";
import Header from "./components/Header/Header";
import Todos from "./components/Todos/Todos";
import { useEffect, useState } from "react";
import { logRoles } from "@testing-library/react";

function App() {
  const initTodosList = [
    {
      id: 1,
      title: "wash",
      date: new Date("2020-10-15"),
      time: "15:56",
      completed: true,
      edit: false,
    },
    {
      id: 2,
      title: "run",
      date: new Date("2000-12-30"),
      time: "15:56",
      completed: true,
      edit: false,
    },
    {
      id: 3,
      title: "buy",
      date: new Date("2010-12-30"),
      time: "15:56",
      completed: false,
      edit: false,
    },
  ];

  // *********
  // init states
  // *********
  const [todosList, setTodosList] = useState(initTodosList);
  const [todoCount, setTodoCount] = useState(initTodosList.length - 1);
  const [inputTodo, setInputValue] = useState({
    title: "",
    date: "",
    time: "",
  });

  // *********
  // 2 way data binding for input
  // *********
  const updateInputValue = (inputType, data) => {
    const newTodo = { ...inputTodo };
    newTodo[inputType] = data;
    setInputValue(newTodo);
  };

  // *********
  // update number of todo in header
  // *********

  useEffect(() => setTodoCount(todosList.length), [todosList]);

  // *********
  // remove to do
  // *********

  const removeTodo = (idToRemove) => {
    const newToDoList = todosList.filter((todo) => todo.id !== idToRemove);
    setTodosList(newToDoList);
  };

  // *********
  // make todo completed or uncompleted
  // *********

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

  // *********
  // add todo to list
  // *********

  const addTodo = (inputTodo) => {
    let newId = todosList.length + 1;
    const newToDoList = [
      ...todosList,
      {
        id: newId,
        title: inputTodo.title ? inputTodo.title : "empty ToDo",
        date: new Date(inputTodo.date ? inputTodo.date : new Date()),
        time: inputTodo.time ? inputTodo.time : "09:00",
        completed: false,
        edit: false,
      },
    ];
    setTodosList(newToDoList);
  };
  // *********
  // edit Todo
  // *********

  const editTodo = (id, edit, todoEdited) => {
    if (edit === false) {
      let newTodosList = todosList.map((todo) => {
        if (todo.id === id) {
          todo.edit = true;
          return todo;
        } else {
          return todo;
        }
      });
      setTodosList(newTodosList);
    } else {
      let newTodosList = todosList.map((todo) => {
        if (todo.id === id) {
          todo = todoEdited;
          todo.edit = false;
          return todo;
        } else {
          return todo;
        }
      });

      setTodosList(newTodosList);
    }
  };

  return (
    <div className="App">
      <>
        <Header todoCount={todoCount} />
        {/* if no input text so button is disable */}
        <button onClick={() => addTodo(inputTodo)} disabled={inputTodo === ""}>
          add Todo
        </button>
        <div>
          <input
            type="text"
            onChange={(e) => updateInputValue("title", e.target.value)}
            value={inputTodo.title}
          ></input>
          <input
            type="date"
            onChange={(e) => updateInputValue("date", e.target.value)}
            value={inputTodo.date}
          ></input>
          <input
            type="time"
            onChange={(e) => updateInputValue("time", e.target.value)}
            value={inputTodo.time}
          ></input>
        </div>
        <Todos
          todosList={todosList}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
          editTodo={editTodo}
        />
      </>
    </div>
  );
}

export default App;

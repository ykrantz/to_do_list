import logo from "./logo.svg";
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

  const [inputTodo, setInputValue] = useState({
    title: "",
    date: "",
    time: "",
  });

  const updateInputValue = (inputType, data) => {
    const newTodo = { ...inputTodo };
    newTodo[inputType] = data;
    setInputValue(newTodo);
  };

  // add todo to list
  const addTodo = (inputTodo) => {
    let newId = todosList.length + 1;
    const newToDoList = [
      ...todosList,
      {
        id: newId,
        title: inputTodo.title,
        date: new Date(inputTodo.date),
        time: inputTodo.time,
        completed: false,
        edit: false,
      },
    ];
    setTodosList(newToDoList);
  };

  const editTodo = (id, edit, todoEdited) => {
    // const todoToEdit = todosList.find((todo) => todo.id === id);
    // setInputValue({
    //   // TODO:fix editind with date and time
    //   id: todoToEdit.id,
    //   title: todoToEdit.title,
    //   date: new Date(todoToEdit.date).toISOString().substring(0, 10),
    //   // time: new Date(todoToEdit.time).toISOString().substring(11, 16),
    //   // date: "2021-01-31",
    //   // time: "20:26",
    //   completed: false,
    //   edit: true,
    // });
    console.log("LISDT:");
    console.table(todosList);
    console.log("QQQ");
    // console.log(todoEdited);
    // console.log(edit);
    // TODO: can edit only after 2 clickes
    if (edit === false) {
      let newTodosList = todosList.map((todo) => {
        if (todo.id === id) {
          todo.edit = true;
          return todo;
        } else {
          return todo;
        }
      });
      console.log("new todoss to update");
      console.table(newTodosList);
      setTodosList(newTodosList);
    } else {
      console.log("LISDT:");
      console.table(todosList);
      let newTodosList = todosList.map((todo) => {
        if (todo.id === id) {
          todo = todoEdited;
          todo.edit = false;
          return todo;
        } else {
          return todo;
        }
      });
      console.log("new todoss to update");

      console.table(newTodosList);
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
            // defaultValue={new Date().toISOString().substring(0, 10)}
            value={inputTodo.date}
          ></input>
          <input
            type="time"
            onChange={(e) => updateInputValue("time", e.target.value)}
            value={inputTodo.time}
          ></input>
          {/* <input
            type="time"
            // onChange={(e) => updateInputValue("time", e.target.value)}
            value={new Date().toISOString().substring(11, 16)}
            // placeholder={new Date().toISOString().substring(0, 10)}
            // defaultValue={new Date().toISOString().substring(0, 10)}
          ></input> */}
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

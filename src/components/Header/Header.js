import "./Header.css";

const Header = ({ todoCount }) => {
  return (
    <>
      <h1>Todo List</h1>
      <h2>number of todos: {todoCount}</h2>
    </>
  );
};

export default Header;

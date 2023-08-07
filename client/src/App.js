import React from "react";
import "./App.css"
import TodoList from "./components/todo-list/TodoList";
import Register from "./components/auth/Register";


function App() {
  return (
    <div className="App">
      {/* <TodoList></TodoList> */}
      <Register></Register>
    </div>
  );
}

export default App;

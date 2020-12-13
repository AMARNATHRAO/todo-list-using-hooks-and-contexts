// 1
import React from "react";
import "./App.css";
import "./Todo.scss";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

function App() {
  return (
    <div className="container">
      <h1 className="title">Amar's Todo List</h1>
      <NewTaskForm />
      <TaskList />
    </div>
  );
}

export default App;

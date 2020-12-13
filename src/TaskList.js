import React from "react";
import Task from "./Task";
import { useTasks } from "./TaskProvider";

export default function TaskList() {
  const { tasks } = useTasks();
  if (tasks && tasks.length > 0) {
    return (
      <table>
        <tbody>
          {tasks.map((task, i) => (
            <Task key={i} {...task} />
          ))}
        </tbody>
      </table>
    );
  }
  return <div>No tasks yet added</div>;
}

import React from "react";
import { useTasks } from "./TaskProvider";

export default function Task({ id, task, complete }) {
  const { setStatusTask, deleteTask } = useTasks();

  const checkTask = (e) => setStatusTask(id, e.target.checked);

  const delTask = () => deleteTask(id);

  if (task) {
    return (
      <tr>
        <td>
          <input type="checkbox" onChange={checkTask} />
        </td>
        <td>
          <span className={complete ? "task-done" : ""}>{task}</span>
        </td>
        <td>
          {/* <button onClick={delTask}>Delete</button> */}
          <button type="button" className="close destroy" onClick={delTask}>
            <span>×</span>
          </button>
        </td>
      </tr>
    );
  }
  return null;
}

import React from "react";

const TaskForm = () => {
  return (
    <form className="task-form">
      <h2 className="form-title">Add New Task</h2>
      <div className="form-group">
        <label htmlFor="task-title" className="form-label">Task Title:</label>
        <input type="text" id="task-title" className="form-input" />
      </div>
      <div className="form-group">
        <label htmlFor="task-desc" className="form-label">Description:</label>
        <textarea id="task-desc" className="form-textarea"></textarea>
      </div>
      <button type="submit" className="form-button">Add Task</button>
    </form>
  );
};

export default TaskForm;
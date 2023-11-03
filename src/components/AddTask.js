import { useState } from "react";
import Tasks from "./Tasks";

const AddTask = ({ onAdd, showAddTask, tasks, deleteTask, toggleReminder }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add a task");
      return;
    }

    onAdd({ text, day, reminder });

    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <>
      {showAddTask && (
        <form className="add-form" onSubmit={onSubmit}>
          <div className="form-control">
            <label>Task</label>
            <input
              type="text"
              placeholder="Add Task"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label>Date & Time</label>
            <input
              type="text"
              placeholder="Add Date & Time"
              value={day}
              onChange={(e) => setDay(e.target.value)}
            />
          </div>
          <div className="form-control form-control-check">
            <label>Set Reminder</label>
            <input
              type="checkbox"
              checked={reminder}
              value={reminder}
              onChange={(e) => setReminder(e.currentTarget.checked)}
            />
          </div>

          <input type="submit" value="Save Task" className="btn btn-block" />
        </form>
      )}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks To Show"
      )}
    </>
  );
};

export default AddTask;

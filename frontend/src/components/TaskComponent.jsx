import { useState, useEffect } from "react";

const API_URL = "http://localhost:5000/api";

const TaskComponent = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState(""); // Added state for input field

  // 4.4 Fetch all tasks
  const fetchTasks = async () => {
    try {
      const response = await fetch(`${API_URL}/task`);
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  // Create a new task
  const createTask = async () => {
    console.log("Creating task with title:", inputValue); // Debug log
    if (!inputValue.trim()) return; // Don't create empty tasks

    try {
      const response = await fetch(`${API_URL}/task`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: inputValue }),
      });
      const newTask = await response.json();
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setInputValue(""); // Clear input after success
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  // 4.3 Update task status logic
  const updateTaskStatus = async (id, newStatus) => {
    try {
      const response = await fetch(`${API_URL}/task/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        // Reflect updated status in the UI immediately
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task._id === id ? { ...task, status: newStatus } : task,
          ),
        );
      }
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Task Manager</h1>

      {/* Add Task Form */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="New Task Title"
        />
        <button
          onClick={createTask}
          disabled={!inputValue.trim()}
          style={{
            marginLeft: "10px",
            cursor: !inputValue.trim() ? "not-allowed" : "pointer",
            opacity: !inputValue.trim() ? 0.6 : 1,
          }}
        >
          Add Task
        </button>
      </div>

      <hr />

      {/* 4.4 Task List Display */}
      <h2>Task List</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((task) => (
          <li
            key={task._id}
            style={{
              marginBottom: "10px",
              borderBottom: "1px solid #ddd",
              paddingBottom: "5px",
            }}
          >
            <strong>{task.title}</strong> -
            <span
              style={{
                color: task.status === "completed" ? "green" : "orange",
              }}
            >
              {" "}
              {task.status}
            </span>
            {/* 4.3 Only show button if task is pending */}
            {task.status !== "completed" && (
              <button
                onClick={() => updateTaskStatus(task._id, "completed")}
                style={{ marginLeft: "10px" }}
              >
                Mark Complete
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskComponent;

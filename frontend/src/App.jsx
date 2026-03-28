import React from "react";
import TaskComponent from "./components/TaskComponent"; // Import your component

function App() {
  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <main>
        <TaskComponent />
      </main>
    </div>
  );
}

export default App;

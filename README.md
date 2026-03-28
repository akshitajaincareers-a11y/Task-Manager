📝 Task Management System (MERN)
A functional Task Management application built to demonstrate full-stack integration using the MERN stack. This project features a React frontend, a Node/Express backend, and a MongoDB cloud database.

🚀 Frameworks & Technologies
Frontend: React.js (Functional Components & Hooks)

Backend: Node.js & Express.js

Database: MongoDB Atlas (Cloud-based NoSQL)

Environment: Dotenv for secure configuration

🛠️ Project Setup & Installation
1. Prerequisites
Ensure you have Node.js (v18+) and npm installed.

2. Backend Setup
Navigate to the backend folder:

Bash
cd backend
Install dependencies:

Bash
npm install
Create a .env file in the backend directory and add your credentials:

Code snippet
PORT=5000
MONGO_URI=mongodb+srv://demo:Akshita%40555@cluster0.kkrc3if.mongodb.net/task-manager?retryWrites=true&w=majority
NODE_ENV=development
Note: The @ in the password has been URL-encoded to %40 to ensure a successful connection.

Start the server:

Bash
npm run dev
3. Frontend Setup
Navigate to the frontend folder:

Bash
cd frontend
Install dependencies:

Bash
npm install
Start the React app:

Bash
npm run dev
🏗️ Backend Details
Architecture: MVC (Model-View-Controller) structure for clear separation of concerns.

Database: MongoDB Atlas using Mongoose for schema modeling.

API Endpoints:

GET /api/tasks: Retrieve all tasks.

POST /api/tasks: Create a new task (defaults to 'pending').

PUT /api/tasks/:id: Update an existing task's status.

📝 Assumptions Made
Input Validation: The "Add Task" button is disabled if the input is empty or contains only whitespace to prevent database clutter.

One-Way Status: For this assignment, tasks move from pending to completed. Once marked as completed, the action button is removed from the UI.

CORS Policy: It is assumed the backend has cors enabled to allow requests from the React development server (typically port 5173 or 3000).

Database Naming: The connection string specifies a database named task-manager which will be automatically created upon the first document insertion.

🖥️ UI Features
Conditional Rendering: The "Mark Complete" button only appears for tasks with a pending status.

Live Updates: The UI state is updated immediately upon a successful API call using React's useState.

Empty State Handling: Proper checks to ensure the application doesn't crash if the task list is empty.
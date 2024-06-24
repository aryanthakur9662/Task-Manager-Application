import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskList from './Components/TaskList';
import TaskForm from './Components/TaskForm';
import TaskDetail from './Components/TaskDetail';
import TaskEdit from './Components/TaskEdit';
import './App.css'; // Include the CSS file

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/add" element={<TaskForm />} />
          <Route path="/tasks/:id" element={<TaskDetail />} />
          <Route path="/edit/:id" element={<TaskEdit />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

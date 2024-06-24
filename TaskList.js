import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css'; // Correct import path

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await axios.get('http://localhost:5001/api/tasks');
    setTasks(response.data);
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5001/api/tasks/${id}`);
    fetchTasks();
  };

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id} className="task-list-item">
            <div className="task-title">{task.title}</div>
            <div className="task-actions">
              <Link to={`/tasks/${task.id}`}>View</Link>
              <Link to={`/edit/${task.id}`}>Edit</Link>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      <Link to="/add" className="task-actions">Add Task</Link>
    </div>
  );
};

export default TaskList;

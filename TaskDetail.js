import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import '../App.css'; // Correct import path

const TaskDetail = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    fetchTask();
  }, []);

  const fetchTask = async () => {
    const response = await axios.get(`http://localhost:5001/api/tasks/${id}`);
    setTask(response.data);
  };

  if (!task) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <p>Due Date: {task.dueDate}</p>
      <Link to={`/edit/${task.id}`}>Edit</Link>
    </div>
  );
};

export default TaskDetail;

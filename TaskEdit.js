import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../App.css'; // Correct import path

const TaskEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState({ title: '', description: '', dueDate: '' });

  const fetchTask = useCallback(async () => {
    const response = await axios.get(`http://localhost:5001/api/tasks/${id}`);
    setTask(response.data);
  }, [id]);

  useEffect(() => {
    fetchTask();
  }, [fetchTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5001/api/tasks/${id}`, task);
    navigate('/');
  };

  return (
    <div className="container">
      <h1>Edit Task</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={task.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={task.description}
          onChange={handleChange}
          required
        ></textarea>
        <input
          type="date"
          name="dueDate"
          value={task.dueDate}
          onChange={handleChange}
          required
        />
        <button type="submit">Update Task</button>
      </form>
    </div>
  );
};

export default TaskEdit;

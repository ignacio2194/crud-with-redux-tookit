import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/TaskSlice";
import{v4 as uuid} from 'uuid'

const Taskform = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    id:uuid()
  
  });

  const dispatch = useDispatch()
  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    dispatch(addTask(task))
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="write your task here..."
        onChange={handleChange}
      />
      <textarea name="description" onChange={handleChange}></textarea>
      <button type="submit">Save task</button>
    </form>
  );
};

export default Taskform;

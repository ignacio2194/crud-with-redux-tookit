import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, updateTask } from "../features/tasks/TaskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";

const Taskform = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tasks = useSelector((state) => state.tasks);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (params.id) {
      dispatch(updateTask(task));
    } else {
      dispatch(addTask({ ...task, id: uuid() }));
    }
    navigate("/");
    e.target.reset();
  };
  useEffect(() => {
    if (params.id) {
      setTask(tasks.find((task) => task.id === params.id));
    }
  }, [params.id,tasks]);
  return (
    <form onSubmit={handleSubmit} className="bg-zinc-800 max-w-sm p-4">
      <label htmlFor="title" className="block font-bold text-sm mb-1">
        {" "}
        Task:
      </label>
      <input
        name="title"
        placeholder="write your task here..."
        onChange={handleChange}
        value={task.title}
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
      />
      <label htmlFor="description" className="block font-bold text-sm mb-2">
        {" "}
        Decription:
      </label>
      <textarea
        name="description"
        onChange={handleChange}
        value={task.description}
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
        placeholder="waiting the task..."
      ></textarea>
      <button type="submit" className="bg-indigo-600 px-2 py-1 rounded-sm text-sm">Save task</button>
    </form>
  );
};

export default Taskform;

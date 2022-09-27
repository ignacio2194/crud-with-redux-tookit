import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/TaskSlice";
import { Link } from "react-router-dom";
const Tasklist = () => {
  const stateTasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };
  return (
    <div className="w-4/6">
      <header className="flex justify-between items-center p-4">
        <h1>Tasks :{stateTasks.length} </h1>
        <Link
          to="/create-task"
          className="bg-indigo-600 px-2 py-1 rounded-sm text-sm"
        >
          Create Task
        </Link>
      </header>

      <div className="grid grid-cols-3 gap-4">
        {stateTasks.map((item) => (
          <div key={item.id} className="bg-neutral-800 rounded-md p-4">
           <header className="flex justify-between">
           <h1>{item.title}</h1>
          <div className="flex gap-x-2">
          <Link to={`/edit-task/${item.id}`} className="bg-zinc-600 px-2 py-1 rounded-md text-xs">
              <button>edit</button>
            </Link>
          <button onClick={() => handleDelete(item.id)} className="bg-red-500 px-2 py-1 text-xs rounded-md text-center">Delete</button>
            
          </div>
           </header>
           <div>{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasklist;

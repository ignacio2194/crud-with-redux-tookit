import React from "react";
import { useSelector } from "react-redux";

const Tasklist = () => {
  const stateTasks = useSelector((state) => state.tasks);
  
  return (
    <div>
      {stateTasks.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <div>{item.description}</div>
          <button>Delete</button>
          <button>Edit</button>
        </div>
    
      ))}
    </div>
  );
};

export default Tasklist;

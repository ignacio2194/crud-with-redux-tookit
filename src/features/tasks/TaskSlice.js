import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
export const taskSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      const taskFound = state.find((item) => item.id=== action.payload);
 
      if(taskFound){
state.splice(state.indexOf(taskFound),1)
      }
    },
    updateTask:(state,action)=>{
const {id,title,description} =action.payload
const Foundtask = state.find(task=> task.id ===id)
if(Foundtask){
  Foundtask.title = title
  Foundtask.description= description
  
}
    }
  },
});
export const { addTask, deleteTask,updateTask  } = taskSlice.actions;
export default taskSlice.reducer;

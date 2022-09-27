import Taskform from "./components/Taskform";
import Tasklist from "./components/Tasklist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="bg-zinc-900 h-screen text-white">
   <div className="flex justify-center items-center h-full">
   <BrowserRouter>
        <Routes>
          <Route path="/" element={<Tasklist />}></Route>
          <Route path="/create-task" element={<Taskform />}></Route>
          <Route path= '/edit-task/:id'element={<Taskform />}></Route>
        </Routes>
      </BrowserRouter>
   </div>
    </div>
  );
}

export default App;

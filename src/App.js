import { useSelector } from 'react-redux'
import Taskform from './components/Taskform'
import Tasklist from './components/Tasklist'
function App() {
  return (
    <div className="App">
      <Taskform />
      <Tasklist />
    </div>
  );
}

export default App;

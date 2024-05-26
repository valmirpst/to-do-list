import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { NewTaskForm } from "./components/Header/NewTaskForm";
import "./index.css";

function App() {
  return (
    <div>
      <Header />
      <Tasks />
    </div>
  );
}

export default App;

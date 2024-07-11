import TodosContextProvider from "./store/todos-context";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import "./App.css";

function App() {
  return (
    <TodosContextProvider>
      <div className="app-container">
        <NewTodo />
        <Todos />
      </div>
    </TodosContextProvider>
  );
}

export default App;

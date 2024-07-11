import { useContext } from "react";
import { TodosContext } from "../store/todos-context";

import Todo from "./Todo";
const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul className="todos-list">
      {todosCtx.items.map((item) => (
        <Todo
          key={item.id}
          text={item.text}
          onDeleteTodo={todosCtx.deleteTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;

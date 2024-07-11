import { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const todosCtx = useContext(TodosContext);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) return;
    todosCtx.addTodo(enteredText);
  };

  return (
    <form className="new-todo" onSubmit={submitHandler}>
      <div>
        <label htmlFor="text">Enter Todo</label>
        <input type="text" id="text" ref={todoTextInputRef}></input>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default NewTodo;

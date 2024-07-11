import React, { PropsWithChildren, useState } from "react";
import TodoModel from "../models/todo";

type TodoContextObject = {
  items: TodoModel[];
  addTodo: (text: string) => void;
  deleteTodo: (id: string) => void;
};
export const TodosContext = React.createContext<TodoContextObject>({
  items: [],
  addTodo: () => {},
  deleteTodo: () => {},
});

const TodosContextProvider: React.FC<PropsWithChildren> = (props) => {
  const [todos, setTodos] = useState<TodoModel[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new TodoModel(todoText);
    setTodos((prevTodos) => {
      return [...prevTodos, newTodo];
    });
  };

  const deleteTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue: TodoContextObject = {
    items: todos,
    addTodo: addTodoHandler,
    deleteTodo: deleteTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;

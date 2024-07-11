const Todo: React.FC<{
  text: string;
  onDeleteTodo: () => void;
}> = (props) => {
  return (
    <li className="todo-item" onClick={props.onDeleteTodo}>
      {props.text}
    </li>
  );
};

export default Todo;

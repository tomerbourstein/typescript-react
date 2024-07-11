class TodoModel {
  id: string;
  text: string;

  constructor(enteredText: string) {
    this.text = enteredText;
    this.id = new Date().toISOString();
  }
}

export default TodoModel

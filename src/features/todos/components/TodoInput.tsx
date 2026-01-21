import { useState } from "react";
import { useTodos } from "../useTodos";

export default function TodoInput() {
  const [input, setInput] = useState("");
  const { addTodo } = useTodos();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo(input);
    setInput("");
  };

  return (
    <form className="todo-input" onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="What needs to be done?"
      />
    </form>
  );
}

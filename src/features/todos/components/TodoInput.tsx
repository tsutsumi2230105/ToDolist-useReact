import { useState } from "react";

type Props = {
  onAdd: (title: string) => void;
};

export default function TodoInput({ onAdd }: Props) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(input);
    setInput("");
  };

  return (
    <form className="todo__input" onSubmit={handleSubmit}>
      <input
        className="todo__input-field"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="What needs to be done?"
      />
    </form>
  );
}

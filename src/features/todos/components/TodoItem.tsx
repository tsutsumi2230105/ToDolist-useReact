import type { Todo } from "../types";

type Props = {
  todo: Todo;
  onDelete: (id: string) => void;
};

export default function TodoItem({ todo, onDelete }: Props) {
  function DeleteButton({
    onClick,
    label = "削除",
  }: {
    onClick: () => void;
    label?: string;
  }) {
    return (
      <button type="button" onClick={onClick}>
        {label}
      </button>
    );
  }

  return (
    <li className="todo-item">
      <span className="todo-title">
        {todo.title}
        <DeleteButton onClick={() => onDelete(todo.id)} />
      </span>
    </li>
  );
}

import type { Todo } from "../types";

type Props = {
  todo: Todo;
  onDelete: (id: string) => void;
};

export default function TodoItem({ todo, onDelete }: Props) {
  return (
    <li className="todo-item">
      <span className="todo-title">{todo.title}</span>
      <button type="button" onClick={() => onDelete(todo.id)}>
        削除
      </button>
    </li>
  );
}

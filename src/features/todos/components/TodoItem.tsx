import type { Todo } from "../types";
import { useTodosContext } from "../context/TodosContext";

type Props = {
  todo: Todo;
};

export default function TodoItem({ todo }: Props) {
  const { deleteTodo } = useTodosContext(); // ← 自分で取得

  return (
    <li className="todo-item">
      <span className="todo-title">{todo.title}</span>
      <button type="button" onClick={() => deleteTodo(todo.id)}>
        削除
      </button>
    </li>
  );
}

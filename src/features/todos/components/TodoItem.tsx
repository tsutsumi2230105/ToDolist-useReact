import type { Todo } from "../types"
import { useTodosContext } from "../context/TodosContext"

type Props = {
  todo: Todo
}

export default function TodoItem({ todo }: Props) {
  const { deleteTodo, toggleTodo } = useTodosContext() // ← 自分で取得

  return (
    <li className="todo__item">
      <input
        type="checkbox"
        className="todo__checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span className={todo.completed ? "todo__title--done" : "todo__title"}>
        {todo.title}
      </span>
      <button type="button" onClick={() => deleteTodo(todo.id)}>
        削除
      </button>
    </li>
  )
}

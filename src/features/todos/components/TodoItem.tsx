import type { Todo } from "../types"

type Props = {
  todo: Todo
}

export default function TodoItem({ todo }: Props) {
  return (
    <li className="todo-item">
      <span className = "todo.title">{todo.title}</span>
    </li>
  )
}
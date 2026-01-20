import type { Todo } from "./types"
import TodoTitle from "./components/TodoTitle"

type Props = {
  todo: Todo
  onDelete: (id: string) => void
  onToggle: (id: string) => void
}

export default function TodoItem({ todo }: Props) {
  return (
    <li className="todo-item">
      <TodoTitle
        title={todo.title}
      />
    </li>
  )
}
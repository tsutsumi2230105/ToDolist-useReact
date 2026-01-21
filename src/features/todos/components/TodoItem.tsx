import type { Todo } from "../types"

type Props = {
  todo: Todo
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

type TodoTitleProps = {
  title: string
}

function TodoTitle({ title }: TodoTitleProps) {
  return (
    <span className="todo-title">
        {title}
    </span>
  )
}
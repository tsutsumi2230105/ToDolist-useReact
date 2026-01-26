import { useTodosContext } from "../../context/TodosContext"

export default function TodoCount() {
  const { uncompletedCount } = useTodosContext()
  const label = uncompletedCount === 1 ? "item" : "items"

  return (
    <p className="todo__count">
      {uncompletedCount} {label} left
    </p>
  )
}

import { useTodosContext } from "../context/TodosContext"

export default function TodoCount() {
  const { uncompletedCount, showAllTodo, showActiveTodo, showCompletedTodo } =
    useTodosContext()
  const label = uncompletedCount === 1 ? "item" : "items"

  return (
    <>
      <p className="todo__count">
        {uncompletedCount} {label} left
      </p>
      <button type="button" onClick={showAllTodo}>
        All
      </button>
      <button type="button" onClick={showActiveTodo}>
        Active
      </button>
      <button type="button" onClick={showCompletedTodo}>
        Completed
      </button>
    </>
  )
}

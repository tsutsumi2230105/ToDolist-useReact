import { useTodosContext } from "../../context/TodosContext"

export default function TodoFilter() {
  const { filter, showAllTodo, showActiveTodo, showCompletedTodo } =
    useTodosContext()
  return (
    <div className="todo__filter">
      <button
        className={`todo__filter-button ${
          filter === "all" ? "todo__filter-button--active" : ""
        }`}
        type="button"
        onClick={showAllTodo}
      >
        All
      </button>
      <button
        className={`todo__filter-button ${
          filter === "active" ? "todo__filter-button--active" : ""
        }`}
        type="button"
        onClick={showActiveTodo}
      >
        Active
      </button>
      <button
        className={`todo__filter-button ${
          filter === "completed" ? "todo__filter-button--active" : ""
        }`}
        type="button"
        onClick={showCompletedTodo}
      >
        Completed
      </button>
    </div>
  )
}

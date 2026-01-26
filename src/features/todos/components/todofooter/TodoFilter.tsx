import { useTodosContext } from "../../context/TodosContext"

export default function TodoFilter() {
  const { showAllTodo, showActiveTodo, showCompletedTodo } = useTodosContext()
  return (
    <>
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

import { useTodosContext } from "../../context/TodosContext"

export default function TodoCompletedDelete() {
  const { clearCompletedTodo } = useTodosContext()

  return (
    <button type="button" onClick={clearCompletedTodo}>
      Clear completed
    </button>
  )
}

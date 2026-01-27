import { useTodosContext } from "../../context/TodosContext"

export default function TodoAllToggle() {
  const { allToggleTodo } = useTodosContext()

  return (
    <button type="button" onClick={() => allToggleTodo()}>
      all-toggle
    </button>
  )
}

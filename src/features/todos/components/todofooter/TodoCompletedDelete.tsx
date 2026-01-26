import { useTodosContext } from "../../context/TodosContext"

export default function TodoCompletedDelete() {
  const { todos, clearCompletedTodo } = useTodosContext()

  const ViewCompletedTodo = todos.some((todo) => todo.completed)

  if (!ViewCompletedTodo) {
    return null
  }

  return (
    <button type="button" onClick={clearCompletedTodo}>
      Clear completed
    </button>
  )
}

import { useTodosContext } from "../../context/TodosContext"

export default function TodoCompletedDelete() {
  const { todos, clearCompletedTodo } = useTodosContext()

  const viewCompletedTodo = todos.some((todo) => todo.completed)

  if (!viewCompletedTodo) {
    return null
  }

  return (
    <button type="button" onClick={clearCompletedTodo}>
      Clear completed
    </button>
  )
}

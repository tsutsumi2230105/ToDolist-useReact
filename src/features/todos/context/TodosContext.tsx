import { createContext, useContext } from "react"
import type { Todo } from "../types"

type Filter = "all" | "active" | "completed"

type TodosContextValue = {
  todos: Todo[]
  visibleTodos: Todo[]
  filter: Filter
  addTodo: (title: string) => void
  deleteTodo: (id: string) => void
  toggleTodo: (id: string) => void
  showAllTodo: () => void
  showActiveTodo: () => void
  showCompletedTodo: () => void
  clearCompletedTodo: () => void
  allToggleTodo: () => void
  uncompletedCount: number
}

export const TodosContext = createContext<TodosContextValue | null>(null)

export const useTodosContext = () => {
  const ctx = useContext(TodosContext)
  if (!ctx) throw new Error("useTodosContext must be used within TodosProvider")
  return ctx
}

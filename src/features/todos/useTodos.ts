
//カスタムフックを使っている。
import { useState } from "react"
import type { Todo } from "./types.ts"

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (title: string) => {
    const trimmed = title.trim()
    if (!trimmed) return

    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title: trimmed,
    }

    setTodos((prev) => [newTodo, ...prev])
  }
  return { todos, addTodo }
}
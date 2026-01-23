//カスタムフックを使っている。
import { useState, useEffect } from "react"
import type { Todo } from "./types.ts"

const storage_key = "todos"

export const useTodos = () => {
  //初期値を　localStorage　から読む
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem(storage_key)
    return savedTodos ? JSON.parse(savedTodos) : []
  })

  //todosが変わったら保存する
  useEffect(() => {
    localStorage.setItem(storage_key, JSON.stringify(todos))
  }, [todos])

  const addTodo = (title: string) => {
    const trimmed = title.trim()
    if (!trimmed) return

    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title: trimmed,
      completed: false,
    }

    setTodos((prev) => [newTodo, ...prev])
  }

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const uncompletedCount = todos.filter((todo) => !todo.completed).length
  //ここで計算している。

  return { todos, addTodo, deleteTodo, toggleTodo, uncompletedCount }
}

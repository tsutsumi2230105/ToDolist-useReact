//カスタムフックを使っている。
import { useState, useEffect } from "react"
import type { Todo } from "./types.ts"

const storage_key = "todos"

//Filterのリテラル型定義
type Filter = "all" | "active" | "completed"

export const useTodos = () => {
  //初期値を　localStorage　から読む
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem(storage_key)
    return savedTodos ? JSON.parse(savedTodos) : []
  })

  const [filter, setFilter] = useState<Filter>("all")

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

  const allToggleTodo = () => {
    setTodos((prev) => {
      const allCompleted = prev.every((item) => item.completed)
      return prev.map((item) => ({ ...item, completed: !allCompleted }))
    })
  }

  const clearCompletedTodo = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed))
  }

  const showAllTodo = () => setFilter("all")
  const showActiveTodo = () => setFilter("active")
  const showCompletedTodo = () => setFilter("completed")

  const visibleTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed
    if (filter === "completed") return todo.completed
    return true
  })

  const uncompletedCount = todos.filter((todo) => !todo.completed).length
  //ここで計算している。

  return {
    todos,
    filter,
    visibleTodos,
    addTodo,
    deleteTodo,
    toggleTodo,
    allToggleTodo,
    uncompletedCount,
    clearCompletedTodo,
    showAllTodo,
    showActiveTodo,
    showCompletedTodo,
  }
}

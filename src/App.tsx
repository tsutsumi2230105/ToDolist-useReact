// src/App.tsx
import { useEffect, useState } from "react"
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"

type Todo = {
  id: string
  title: string
  completed: boolean
}

export type Filter = "all" | "active" | "completed"

const STORAGE_KEY = "todos_v1"

export default function App() {
  // ✅ 起動時に localStorage から読む（lazy initializer）
  const [todos, setTodos] = useState<Todo[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (!saved) return []
      const parsed = JSON.parse(saved)
      if (!Array.isArray(parsed)) return []
      return parsed as Todo[]
    } catch {
      return []
    }
  })

  // ✅ 追加：フィルタ（全て / 未完了 / 完了）
  const [filter, setFilter] = useState<Filter>("all")

  // ✅ todos が変わるたびに保存
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
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
    setTodos((prev) => prev.filter((t) => t.id !== id))
  }

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    )
  }

  const activeCount = todos.filter((t) => !t.completed).length

  // ✅ フィルタに応じて「表示するToDo」だけを作る
  const visibleTodos =
    filter === "active"
      ? todos.filter((t) => !t.completed)
      : filter === "completed"
      ? todos.filter((t) => t.completed)
      : todos

  return (
    <>
      <Header />
      <Main
        todos={visibleTodos}
        onAddTodo={addTodo}
        onDeleteTodo={deleteTodo}
        onToggleTodo={toggleTodo}
        activeCount={activeCount}
        filter={filter}
        onChangeFilter={setFilter}
      />
      <Footer />
    </>
  )
}
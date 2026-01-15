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

const STORAGE_KEY = "todos_v1"

export default function App() {
  // ✅ 起動時に localStorage から読む（lazy initializer）
  const [todos, setTodos] = useState<Todo[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (!saved) return []
      const parsed = JSON.parse(saved)

      // ざっくり型チェック（壊れたデータ対策）
      if (!Array.isArray(parsed)) return []
      return parsed
    } catch {
      return []
    }
  })

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

  const activeCount = todos.filter(todo => !todo.completed).length

  return (
    <>
      <Header />
      <Main
        todos={todos}
        onAddTodo={addTodo}
        onDeleteTodo={deleteTodo}
        onToggleTodo={toggleTodo}
        activeCount={activeCount} 
      />
      <Footer />
    </>
  )
}
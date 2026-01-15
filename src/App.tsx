// src/App.tsx
import { useState } from "react"
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"

type Todo = {
id: string
title: string
}

export default function App() {
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

  // ✅ これを追加
  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  return (
    <>
      <Header />   {/* ← これがないと表示されない */}
      <Main
        todos={todos}
        onAddTodo={addTodo}
        onDeleteTodo={deleteTodo}
      />
      <Footer />   {/* ← これも */}
    </>
  )
}
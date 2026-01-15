// src/App.tsx
import { useState } from "react"
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"

type Todo = {
id: string
title: string
completed: boolean // ✅追加
}

export default function App() {
const [todos, setTodos] = useState<Todo[]>([])

const addTodo = function (title: string): void {
  const trimmed: string = title.trim()

  if (trimmed === "") {
    return
  }

const newTodo: Todo = {
  id: crypto.randomUUID(),
  title: trimmed,
  completed: false, // ✅追加
}

setTodos((prev) => {
  return [newTodo, ...prev]
})
}

  // ✅ これを追加
const deleteTodo = function (id: string): void {
  setTodos(function (prev: Todo[]): Todo[] {
    return prev.filter(function (todo: Todo): boolean {
      if (todo.id !== id) {
        return true
      } else {
        return false
      }
    })
  })
}

  const toggleTodo = (id: string) => {
  setTodos((prev) =>
    prev.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  )
}


  return (
    <>
      <Header />
      <Main
        todos={todos}
        onAddTodo={addTodo}
        onDeleteTodo={deleteTodo}
        onToggleTodo={toggleTodo} // ✅追加
      />
      <Footer />
    </>
  )
}
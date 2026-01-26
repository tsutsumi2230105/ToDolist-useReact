import { useState } from "react"
import { useTodosContext } from "../../context/TodosContext"

export default function TodoInput() {
  const { addTodo } = useTodosContext()
  const [input, setInput] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = input.trim()
    if (!trimmed) return
    addTodo(trimmed)
    setInput("")
  }

  return (
    <form className="todo__input" onSubmit={handleSubmit}>
      <input
        className="todo__input-field"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="What needs to be done?"
      />
    </form>
  )
}

// src/components/Main/Main.tsx
import { useState } from "react"
import "./Main.scss"

type Todo = {
  id: string
  title: string
  completed: boolean // ✅追加
}

type Props = {
  todos: Todo[]
  onAddTodo: (title: string) => void
  onDeleteTodo: (id: string) => void
  onToggleTodo: (id: string) => void // ✅追加
}

// ✅ ここに onDeleteTodo を追加
export default function Main({ todos, onAddTodo, onDeleteTodo, onToggleTodo }: Props) {
    const [input, setInput] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAddTodo(input)
    setInput("")
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input
          className="todo-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="What needs to be done?"
        />
        <button type="submit" className="add-button">追加</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <label className="todo-check">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggleTodo(todo.id)}
              />
              <span className="todo-check-icon" aria-hidden="true" />
            </label>

            <span className={todo.completed ? "todo-title done" : "todo-title"}>
              {todo.title}
            </span>

            <button
              type="button"
              className="delete-button"
              onClick={() => onDeleteTodo(todo.id)}
              aria-label="削除"
            >
            </button>
          </li>
        ))}
      </ul>
    </main>
  )
}
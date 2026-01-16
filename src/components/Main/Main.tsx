// src/components/Main/Main.tsx
import { useState } from "react"
import "./Main.scss"
import type { Filter } from "../../App"

type Todo = {
  id: string
  title: string
  completed: boolean
}

type Props = {
  todos: Todo[]
  onAddTodo: (title: string) => void
  onDeleteTodo: (id: string) => void
  onToggleTodo: (id: string) => void
  activeCount: number
  filter: Filter
  onChangeFilter: (next: Filter) => void
}

export default function Main({
  todos,
  onAddTodo,
  onDeleteTodo,
  onToggleTodo,
  activeCount,
  filter,
  onChangeFilter,
}: Props) {
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
        <button type="submit" className="add-button">
          追加
        </button>
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
            />
          </li>
        ))}
      </ul>

            {/* ✅ 追加：フィルタボタン（全て / 未完了 / 完了） */}
      <div className="filters" style={{ width: 550, margin: "12px auto" }}>
        <button
          type="button"
          className={filter === "all" ? "is-active" : ""}
          onClick={() => onChangeFilter("all")}
        >
          全て
        </button>
        <button
          type="button"
          className={filter === "active" ? "is-active" : ""}
          onClick={() => onChangeFilter("active")}
        >
          未完了
        </button>
        <button
          type="button"
          className={filter === "completed" ? "is-active" : ""}
          onClick={() => onChangeFilter("completed")}
        >
          完了
        </button>
      </div>

      <p>残り {activeCount} 件</p>
    </main>
  )
}
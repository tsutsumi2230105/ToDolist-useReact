// src/components/Main/Main.tsx
import { useState } from "react"
import "./Main.css"

type Todo = {
id: string
title: string
}

type Props = {
todos: Todo[]
onAddTodo: (title: string) => void
}

export default function Main({ todos, onAddTodo }: Props) {
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
value={input}
onChange={(e) => setInput(e.target.value)}
placeholder="ToDoを入力"
/>
<button type="submit">追加</button>
</form>

<ul>
{todos.map((todo) => (
<li key={todo.id}>{todo.title}</li>
))}
</ul>
</main>
)
}
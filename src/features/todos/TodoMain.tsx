import "./todo.scss"
import type { Todo } from "./types"
import TodoInput from "./TodoInput"
import TodoItem from "./TodoItem"

type Props = {
  todos: Todo[]
  addTodo: (title: string) => void
}

export default function TodoMain({ todos, addTodo }: Props) {
  return (
    <main>
      <TodoInput onAdd={addTodo} />

      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
          />
        ))}
      </ul>
    </main>
  )
}
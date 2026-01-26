import "../todo.scss"
import TodoInput from "./TodoInput"
import TodoItem from "./TodoItem"
import TodoCompletedDelete from "./todofooter/TodoCompletedDelete"
import TodoCount from "./todofooter/TodoCount"
import TodoFilter from "./todofooter/TodoFilter"
import { TodosProvider } from "../context/TodosProvider"
import { useTodosContext } from "../context/TodosContext"
//カスタムフック//

function TodoMainBody() {
  const { visibleTodos, addTodo } = useTodosContext()

  return (
    <main>
      <TodoInput onAdd={addTodo} />
      <ul>
        {visibleTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      <TodoCount />
      <TodoFilter />
      <TodoCompletedDelete />
    </main>
  )
}

export default function TodoMain() {
  return (
    <TodosProvider>
      <TodoMainBody />
    </TodosProvider>
  )
}

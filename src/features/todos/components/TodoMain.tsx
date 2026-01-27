import "../todo.scss"
import TodoInput from "./TodoHeader/TodoInput"
import TodoItem from "./TodoItem"
import TodoCompletedDelete from "./TodoFooter/TodoCompletedDelete"
import TodoCount from "./TodoFooter/TodoCount"
import TodoFilter from "./TodoFooter/TodoFilter"
import { TodosProvider } from "../context/TodosProvider"
import { useTodosContext } from "../context/TodosContext"
import TodoAllToggle from "./TodoHeader/TodoAllToggle"
//カスタムフック//

function TodoMainBody() {
  const { visibleTodos } = useTodosContext()

  return (
    <main>
      <TodoAllToggle />
      <TodoInput />
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

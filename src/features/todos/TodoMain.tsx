import "./todo.scss"
import TodoInput from "./components/TodoInput"
import TodoItem from "./components/TodoItem"
import TodoCount from "./components/todofooter/TodoCount"
import TodoFilter from "./components/todofooter/TodoFilter"
import { TodosProvider } from "./context/TodosProvider"
import { useTodosContext } from "./context/TodosContext"
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

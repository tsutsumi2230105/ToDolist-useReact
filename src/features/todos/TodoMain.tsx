import './todo.scss'
import TodoInput from './components/TodoInput'
import TodoItem from './components/TodoItem'
import TodoCount from './components/TodoCount'
import { TodosProvider } from './context/TodosProvider'
import { useTodosContext } from './context/TodosContext'
//カスタムフック//

function TodoMainBody() {
  const { todos, addTodo } = useTodosContext()

  const uncompletedCount = todos.filter((t) => !t.completed).length

  return (
    <main>
      <TodoInput onAdd={addTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      <TodoCount uncompletedCount={uncompletedCount} />
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

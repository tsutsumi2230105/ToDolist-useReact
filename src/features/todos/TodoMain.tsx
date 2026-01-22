import "./todo.scss";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";
import { TodosProvider } from "./context/TodosProvider";
import { useTodosContext } from "./context/TodosContext";
//カスタムフック//

function TodoMainBody() {
  const { todos, addTodo } = useTodosContext();

  return (
    <main>
      <TodoInput onAdd={addTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </main>
  );
}

export default function TodoMain() {
  return (
    <TodosProvider>
      <TodoMainBody />
    </TodosProvider>
  );
}

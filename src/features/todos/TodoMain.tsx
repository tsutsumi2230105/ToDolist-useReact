import "./todo.scss";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";
import { useTodos } from "./useTodos";
//カスタムフック//

export default function TodoMain() {
  const { todos, addTodo } = useTodos();

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

import { createContext, useContext } from "react";
import type { Todo } from "../types";

type TodosContextValue = {
  todos: Todo[];
  addTodo: (title: string) => void;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
};

export const TodosContext = createContext<TodosContextValue | null>(null);

export const useTodosContext = () => {
  const ctx = useContext(TodosContext);
  if (!ctx)
    throw new Error("useTodosContext must be used within TodosProvider");
  return ctx;
};

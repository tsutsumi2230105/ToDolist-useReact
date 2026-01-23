import type { ReactNode } from "react"
import { TodosContext } from "./TodosContext"
import { useTodos } from "../useTodos"

type Props = { children: ReactNode }

export function TodosProvider({ children }: Props) {
  const value = useTodos() // ✅ ここで1回だけ

  return <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
}

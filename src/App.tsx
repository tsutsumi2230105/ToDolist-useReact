import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

import TodoMain from "./features/todos/TodoMain.tsx"
//ToDoアプリのメイン部分
//・入力欄
//・Todo一覧
//・削除、チェックなど画面の中心部

import { useTodos } from "./features/todos/useTodos"
//カスタムフック//


export default function App() {
  const { todos, addTodo } = useTodos()

  

  return (
    <>
      <Header />
      <TodoMain
        todos={todos}
        addTodo={addTodo}
      />
      <Footer />
    </>
  )
}
//TodoMainに対して、操作用の関数を渡し、
//画面表示と操作を頼んでいる。//
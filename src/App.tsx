import Header from "./features/layout/Header/Header.tsx"
import Footer from "./features/layout/Footer/Footer.tsx"
import TodoMain from "./features/todos/components/TodoMain.tsx"
//ToDoアプリのメイン部分
//・入力欄
//・Todo一覧
//・削除、チェックなど画面の中心部

export default function App() {
  return (
    <>
      <Header />
      <TodoMain />
      <Footer />
    </>
  )
}

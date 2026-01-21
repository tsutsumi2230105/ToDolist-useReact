import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import TodoMain from "./features/todos/TodoMain.tsx"
//ToDoアプリのメイン部分
//・入力欄
//・Todo一覧
//・削除、チェックなど画面の中心部

export default function App() {
  return (
    <>
      <Header />
      <TodoMain/>
      <Footer />
    </>
  )
}
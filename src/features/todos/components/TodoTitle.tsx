type Props = {
  title: string
  completed: boolean
}

export default function TodoTitle({ title, completed }: Props) {
  return (
    <span className={completed ? "todo-title done" : "todo-title"}>
      {title}
    </span>
  )
}
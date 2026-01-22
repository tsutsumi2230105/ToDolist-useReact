type Props = {
  uncompletedCount: number
}

export default function TodoCount({ uncompletedCount }: Props) {
  const label = uncompletedCount === 1 ? 'item' : 'items'

  return (
    <p className="todo__count">
      {uncompletedCount} {label} left
    </p>
  )
}

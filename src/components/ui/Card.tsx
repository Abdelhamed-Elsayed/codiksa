interface CardProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  hoverable?: boolean
}

export default function Card({ children, className, onClick, hoverable = false }: CardProps) {
  return (
    <div data-hoverable={hoverable} onClick={onClick} className={className}>
      {children}
    </div>
  )
}

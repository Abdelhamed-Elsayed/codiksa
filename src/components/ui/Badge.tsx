type BadgeVariant = 'default' | 'primary' | 'outline'

interface BadgeProps {
  children: React.ReactNode
  variant?: BadgeVariant
  className?: string
}

export default function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span data-variant={variant} className={className}>
      {children}
    </span>
  )
}

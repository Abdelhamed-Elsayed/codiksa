import Link from 'next/link'

type ButtonVariant = 'primary' | 'secondary' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  children: React.ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  external?: boolean
  className?: string
  ariaLabel?: string
}

export default function Button({
  children, variant = 'primary', size = 'md', href,
  onClick, disabled, type = 'button', external, className, ariaLabel,
}: ButtonProps) {
  if (href) {
    return (
      <Link
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        aria-label={ariaLabel}
        data-variant={variant}
        data-size={size}
        className={className}
      >
        {children}
      </Link>
    )
  }
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      data-variant={variant}
      data-size={size}
      className={className}
    >
      {children}
    </button>
  )
}

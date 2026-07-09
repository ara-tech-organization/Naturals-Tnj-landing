import { useReveal } from '../hooks/useReveal'

export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children }) {
  const ref = useReveal()

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={{ animationDelay: delay ? `${delay}ms` : undefined }}
    >
      {children}
    </Tag>
  )
}

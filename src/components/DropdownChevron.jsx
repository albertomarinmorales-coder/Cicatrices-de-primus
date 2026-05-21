import { ChevronDown, ChevronUp } from 'lucide-react'

export default function DropdownChevron({ open, className = '' }) {
  const Icon = open ? ChevronUp : ChevronDown
  return (
    <Icon
      className={['dropdown-chevron', className].filter(Boolean).join(' ')}
      size={18}
      strokeWidth={2}
      aria-hidden="true"
    />
  )
}

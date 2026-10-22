export const CONCEPT_STATES = {
  NOT_ASSESSED: { label: 'Not Assessed', color: 'dim', dot: 'bg-dim' },
  DEVELOPING: { label: 'Developing', color: 'info', dot: 'bg-info' },
  NEEDS_ATTENTION: { label: 'Needs Attention', color: 'warning', dot: 'bg-warning' },
  MASTERED: { label: 'Mastered', color: 'success', dot: 'bg-success' },
}

const TONES = {
  dim: 'text-dim border-dim/40 bg-dim/10',
  info: 'text-info border-info/40 bg-info/10',
  warning: 'text-warning border-warning/40 bg-warning/10',
  success: 'text-success border-success/40 bg-success/10',
}

export default function ConceptBadge({ state, className = '' }) {
  const config = CONCEPT_STATES[state] || CONCEPT_STATES.NOT_ASSESSED
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-sm border px-2 py-0.5 text-[0.625rem] font-medium uppercase tracking-[0.08em] ${TONES[config.color]} ${className}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${config.dot}`} />
      {config.label}
    </span>
  )
}

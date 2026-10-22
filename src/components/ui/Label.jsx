export default function Label({ className = '', ...props }) {
  return <label className={`text-sm font-medium leading-none ${className}`} {...props} />
}

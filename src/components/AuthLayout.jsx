import Logo from './Logo.jsx'

export default function AuthLayout({ icon: Icon, title, subtitle, footer, children, logo = false }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-md">
        <div className="mb-10 text-center">
          {logo ? (
            <div className="mb-6 flex justify-center">
              <Logo className="h-14 w-14" />
            </div>
          ) : (
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary">
              <Icon className="h-7 w-7 text-primary-foreground" aria-hidden="true" />
            </div>
          )}
          <h1 className="text-3xl font-bold tracking-tight text-foreground">{title}</h1>
          {subtitle && <p className="mt-2 text-muted-foreground">{subtitle}</p>}
        </div>
        <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">{children}</div>
        {footer && <p className="mt-6 text-center text-sm text-muted-foreground">{footer}</p>}
      </div>
    </div>
  )
}

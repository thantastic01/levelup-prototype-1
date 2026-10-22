import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Brain, CheckCircle2, ChevronLeft, RefreshCw, Sparkles, XCircle } from 'lucide-react'
import Logo from '../components/Logo.jsx'
import Card from '../components/ui/Card.jsx'
import ConceptBadge from '../components/ui/ConceptBadge.jsx'
import { demoSteps } from '../data/demoSteps.js'

export default function Demo() {
  const [index, setIndex] = useState(0)
  const step = demoSteps[index]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="flex h-16 items-center justify-between border-b border-border px-6">
        <Link to="/" className="flex items-center gap-2">
          <Logo className="h-8" />
          <span className="font-display font-bold tracking-tight">LEVELUP</span>
        </Link>
        <Link
          to="/register"
          className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
        >
          Start Your Diagnostic
        </Link>
      </header>

      <div className="mx-auto max-w-3xl px-6 py-10">
        <div className="mb-8 text-center">
          <div className="mb-4 flex justify-center">
            <Logo size="lg" />
          </div>
          <p className="mb-2 text-[0.625rem] uppercase tracking-[0.18em] text-primary">
            Adaptive Demo
          </p>
          <h1 className="font-display text-3xl font-semibold">Watch the engine think</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            A fictional student, a real adaptive sequence. Step through it.
          </p>
        </div>

        <div className="mb-6 flex items-center gap-1">
          {demoSteps.map((item, i) => (
            <div
              key={item.title}
              className={`h-1 flex-1 rounded-full ${i <= index ? 'bg-primary' : 'bg-border'}`}
            />
          ))}
        </div>

        <Card className="p-6">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-[0.625rem] font-medium uppercase tracking-[0.08em] text-muted-foreground">
              Step {index + 1} of {demoSteps.length}
            </p>
            <ConceptBadge state={step.state} />
          </div>

          <h2 className="mb-3 font-display text-xl font-semibold">{step.title}</h2>
          <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{step.body}</p>

          {step.concept && (
            <p className="mb-3 text-[0.625rem] uppercase tracking-[0.08em] text-primary">
              {step.concept}
            </p>
          )}

          {step.question && (
            <div className="mb-3 rounded-md border border-border bg-secondary/20 p-4">
              <p className="text-sm font-medium">{step.question}</p>
              <p
                className={`mt-2 flex items-center gap-1.5 text-sm ${
                  step.correct ? 'text-success' : 'text-warning'
                }`}
              >
                {step.correct ? <CheckCircle2 className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}{' '}
                {step.answer}
              </p>
            </div>
          )}

          {step.recommendation && (
            <div className="mb-3 flex gap-2 rounded-md border border-primary/40 bg-primary/5 p-4">
              <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <p className="text-sm text-foreground/90">{step.recommendation}</p>
            </div>
          )}

          {step.diagnosis && (
            <div className="mb-3 flex gap-2 rounded-md border border-info/30 bg-info/5 p-3">
              <Brain className="mt-0.5 h-4 w-4 shrink-0 text-info" />
              <div>
                <p className="mb-0.5 text-[0.625rem] uppercase tracking-[0.08em] text-info">
                  Diagnosis
                </p>
                <p className="text-sm text-foreground/90">{step.diagnosis}</p>
              </div>
            </div>
          )}

          {step.decision && (
            <div className="flex gap-2 rounded-md border border-success/30 bg-success/5 p-3">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
              <div>
                <p className="mb-0.5 text-[0.625rem] uppercase tracking-[0.08em] text-success">
                  Adaptive decision
                </p>
                <p className="text-sm text-foreground/90">{step.decision}</p>
              </div>
            </div>
          )}
        </Card>

        <div className="mt-6 flex items-center justify-between">
          <button
            onClick={() => index > 0 && setIndex(index - 1)}
            disabled={index === 0}
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground disabled:opacity-30"
          >
            <ChevronLeft className="h-4 w-4" /> Back
          </button>

          {index < demoSteps.length - 1 ? (
            <button
              onClick={() => setIndex(index + 1)}
              className="flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
            >
              Next step <ArrowRight className="h-4 w-4" />
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={() => setIndex(0)}
                className="flex items-center gap-1 rounded-md border border-border px-4 py-2.5 text-sm"
              >
                <RefreshCw className="h-4 w-4" /> Replay
              </button>
              <Link
                to="/register"
                className="flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
              >
                Start Your Diagnostic <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

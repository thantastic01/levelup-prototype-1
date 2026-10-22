import { Link } from 'react-router-dom'
import { ArrowRight, Brain, CircleCheck, Play, Repeat, Sparkles, Target, TrendingUp } from 'lucide-react'
import Logo from '../components/Logo.jsx'
import GradientAscii from '../components/GradientAscii.jsx'

const LOOP = [
  {
    step: 'ASSESS',
    icon: Brain,
    desc: 'A diagnostic finds what you actually know — not a score, a knowledge state.',
  },
  {
    step: 'DIAGNOSE',
    icon: Target,
    desc: 'Concept-level gaps and prerequisite weaknesses are located precisely.',
  },
  {
    step: 'PERSONALIZE',
    icon: Sparkles,
    desc: 'Your learning path is built from your evidence, with a reason for every step.',
  },
  {
    step: 'PRACTICE',
    icon: Repeat,
    desc: "Targeted practice on exactly the concept that's holding you back.",
  },
  {
    step: 'MASTER',
    icon: TrendingUp,
    desc: 'Reassess with new questions. Mastery is earned, then confirmed.',
  },
]

const FEATURES = [
  {
    t: 'Concept-level mastery',
    d: 'Not one percentage. Every concept carries a state: Not Assessed, Developing, Needs Attention, or Mastered — an evolving estimate from multiple pieces of evidence.',
  },
  {
    t: 'Prerequisite diagnosis',
    d: 'Struggling with factorisation? LEVELUP checks whether the real blocker is linear equations — and strengthens the prerequisite first.',
  },
  {
    t: 'Error pattern recognition',
    d: 'Repeated sign errors, memorised-but-not-applied concepts, misread questions — classified and fed back into your recommendations.',
  },
  {
    t: 'Subject-aware adaptation',
    d: "Math procedures, Science misconceptions, Social Science cause-effect, English grammar-in-use — the engine adapts to each subject's nature.",
  },
]

export default function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="glass-bar sticky top-0 z-20 border-b border-border">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-2 px-6 sm:px-8">
          <div className="flex shrink-0 items-center gap-2">
            <Logo className="h-8" />
            <span className="font-display font-bold tracking-tight">LEVELUP</span>
          </div>
          <div className="flex items-center gap-3 sm:gap-5">
            <Link
              to="/demo"
              className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline"
            >
              View Demo
            </Link>
            <Link
              to="/login"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Sign in
            </Link>
            <Link
              to="/register"
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-primary/30 active:translate-y-0 active:scale-[0.97]"
            >
              Start Diagnostic
            </Link>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="grid-hairline absolute inset-0 opacity-30" />
        <div className="absolute -top-40 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[34rem]">
          <GradientAscii
            colors={['#312e81', '#a78bfa', '#f6f8ff', '#67e8f9']}
            characters=" =+xX0S8#@"
            cellSize={16}
            density={0.45}
            gradientOpacity={0.35}
            glyphOpacity={0.6}
            speed={0.6}
            flow={0.4}
            flicker={0.15}
            lightMode
          />
        </div>
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[34rem]"
          style={{
            background:
              'radial-gradient(ellipse 60% 55% at 50% 42%, hsl(var(--background) / 0.88) 0%, hsl(var(--background) / 0.55) 55%, transparent 100%)',
          }}
        />

        <div className="relative mx-auto max-w-6xl px-6 pb-28 pt-20 text-center sm:px-8 sm:pb-40 sm:pt-32">
          <div className="mb-12 flex justify-center">
            <Logo size="xl" />
          </div>
          <p className="mb-7 text-[0.6875rem] uppercase tracking-[0.18em] text-primary">
            Adaptive Learning · Class 4–10 · CBSE
          </p>
          <h1
            className="font-display font-bold leading-[1.08] tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 6.5vw, 4rem)' }}
          >
            KNOW WHAT YOU KNOW.
            <br />
            <span className="text-glow-blue text-neon">MASTER WHAT YOU DON'T.</span>
          </h1>
          <p className="mx-auto mt-9 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Two students in the same classroom can be worlds apart — one at Class 6 level in
            algebra, the other at Class 10. LEVELUP never asks for a class. It finds each student's
            actual level, concept by concept, from Class 4 up to Class 10 — and builds a learning
            path around them.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/register"
              className="glow-cyan flex items-center gap-2 rounded-md bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97]"
            >
              Start Diagnostic <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/demo"
              className="flex items-center gap-2 rounded-md border border-border px-8 py-4 text-sm font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-secondary/40 active:translate-y-0 active:scale-[0.97]"
            >
              <Play className="h-4 w-4" /> View Demo
            </Link>
          </div>
          <p className="mt-12 text-[0.625rem] uppercase tracking-[0.08em] text-dim">
            Mathematics · Science · Social Science · English
          </p>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-28 sm:px-8 sm:py-36">
          <p className="mb-5 text-[0.625rem] uppercase tracking-[0.08em] text-primary">The Problem</p>
          <h2 className="mb-8 font-display text-3xl font-semibold sm:text-4xl">
            Same class. Different level.
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            A quiz tells you a score. It doesn't tell you <em>why</em>. One student knows the method
            but freezes when the form changes. Another memorised the definition but can't apply it.
            A third has a prerequisite gap from two chapters ago. LEVELUP tells them apart — and
            teaches each one differently.
          </p>
        </div>
      </section>

      <section className="border-t border-border bg-card/30">
        <div className="mx-auto max-w-5xl px-6 py-28 sm:px-8 sm:py-36">
          <p className="mb-5 text-[0.625rem] uppercase tracking-[0.08em] text-primary">The Loop</p>
          <h2 className="mb-16 font-display text-3xl font-semibold sm:text-4xl">
            Everything supports one cycle.
          </h2>
          <div className="flex flex-col gap-0">
            {LOOP.map((item, index) => (
              <div key={item.step} className="flex items-start gap-7">
                <div className="flex flex-col items-center">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  {index < LOOP.length - 1 && <div className="my-1 h-16 w-px bg-border" />}
                </div>
                <div className="pb-10 pt-2.5">
                  <h3 className="mb-2.5 font-display text-sm font-semibold tracking-wide">
                    {item.step}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="stagger-fade mx-auto grid max-w-5xl gap-6 px-6 py-28 sm:grid-cols-2 sm:gap-8 sm:px-8 sm:py-36">
          {FEATURES.map((feature) => (
            <div
              key={feature.t}
              className="glass rounded-lg p-7 transition-all duration-200 hover:-translate-y-1 sm:p-9"
            >
              <CircleCheck className="mb-5 h-5 w-5 text-primary" />
              <h3 className="mb-3 font-display font-semibold">{feature.t}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{feature.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-3xl px-6 py-32 text-center sm:px-8 sm:py-40">
          <h2 className="mb-7 font-display text-3xl font-semibold sm:text-4xl">
            Same class. Different level. Different path.
          </h2>
          <p className="mb-12 text-base text-muted-foreground sm:text-lg">
            See the adaptive engine work on a fictional student, then start your own diagnostic.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/register"
              className="glow-cyan rounded-md bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97]"
            >
              Start Diagnostic
            </Link>
            <Link
              to="/demo"
              className="rounded-md border border-border px-8 py-4 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-secondary/40 active:translate-y-0 active:scale-[0.97]"
            >
              Watch the Demo
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-12 sm:flex-row sm:px-8">
          <div className="flex items-center gap-2">
            <Logo className="h-6" />
            <span className="font-display text-sm font-semibold">LEVELUP</span>
          </div>
          <p className="text-center text-[0.625rem] uppercase tracking-[0.08em] text-dim sm:text-left">
            Know What You Know. Master What You Don't.
          </p>
        </div>
      </footer>
    </div>
  )
}

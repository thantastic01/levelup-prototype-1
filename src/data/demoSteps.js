export const DEMO_STATES = {
  NOT_ASSESSED: 'NOT_ASSESSED',
  DEVELOPING: 'DEVELOPING',
  NEEDS_ATTENTION: 'NEEDS_ATTENTION',
  MASTERED: 'MASTERED',
}

export const demoSteps = [
  {
    title: 'Meet Aarav — Class 9',
    body: "Aarav is a Class 9 student. He's about to take a short diagnostic. LEVELUP doesn't know him yet — it will find out, concept by concept.",
    concept: 'Mathematics · Algebra',
    question: 'Solve: 2x + 3 = 11',
    answer: 'Aarav answers: x = 4 ✓',
    correct: true,
    diagnosis:
      'Correct, and fast. LEVELUP notes: Aarav can solve a basic linear equation.',
    decision:
      'Increase difficulty — probe a non-standard form to test real understanding.',
    state: DEMO_STATES.DEVELOPING,
  },
  {
    title: 'Probing deeper — does he really understand?',
    body: "LEVELUP doesn't just go 'correct → harder'. It changes the form to see if the method transfers.",
    concept: 'Mathematics · Algebra',
    question: 'Solve: 5 - 2x = 11',
    answer: 'Aarav answers: x = 3 ✗',
    correct: false,
    diagnosis:
      "Wrong. But LEVELUP doesn't label him 'weak at equations'. It asks: where exactly? The error is a sign error when transposing — not a missing concept.",
    decision: 'Investigate the prerequisite: does Aarav handle signed numbers reliably?',
    state: DEMO_STATES.NEEDS_ATTENTION,
  },
  {
    title: 'Diagnosing the prerequisite',
    body: 'LEVELUP checks the foundation rather than drilling more equations.',
    concept: 'Mathematics · Number Systems',
    question: 'Compute: -6 ÷ -2 = ?',
    answer: 'Aarav answers: -3 ✗',
    correct: false,
    diagnosis:
      "Aarav treats division of negatives like subtraction. The real blocker isn't linear equations — it's signed-number operations, a prerequisite from an earlier chapter.",
    decision: 'Strengthen the prerequisite first. The next activity changes accordingly.',
    state: DEMO_STATES.NEEDS_ATTENTION,
  },
  {
    title: 'Personalized path — strengthen the foundation',
    body: 'LEVELUP explains why, in plain language.',
    concept: 'Mathematics · Number Systems',
    recommendation:
      "You may understand linear equations, but a prerequisite skill — signed-number operations — needs strengthening first. We'll rebuild that, then return.",
    decision:
      'Learning activity: Understand → Example → Guided → Practice → Mastery check on signed operations.',
    state: DEMO_STATES.DEVELOPING,
  },
  {
    title: 'Reassess with a new question',
    body: 'After learning and practice, LEVELUP reassesses — never repeating the same question.',
    concept: 'Mathematics · Algebra',
    question: 'Solve: 7 - 3x = -2',
    answer: 'Aarav answers: x = 3 ✓',
    correct: true,
    diagnosis:
      'Correct — and the form is harder than the one he missed. The prerequisite fix worked. Mastery is earned from new evidence.',
    decision: 'Update mastery: Linear Equations → Developing (rising). Move toward application.',
    state: DEMO_STATES.DEVELOPING,
  },
  {
    title: 'Same class. Different level. Different path.',
    body: 'Another student, Maya, started the same diagnostic but already mastered signed numbers. LEVELUP skipped the prerequisite drill and advanced her straight to factorisation applications. Same classroom. Same diagnostic. Two different paths — because two different knowledge states.',
    decision: "That's the difference between a quiz and LEVELUP.",
    state: DEMO_STATES.MASTERED,
  },
]

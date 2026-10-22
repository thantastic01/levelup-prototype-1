# LEVELUP clone – agent notes

Static front-end clone of https://level-up-teamparadox.base44.app (React + Vite + Tailwind).

## Running it

```bash
docker compose -f docker-compose.base44.yml up -d --build
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/
```

- The `web` service runs `vite` in dev mode from the bind-mounted source on host port 3000.
- `npm install` runs on every container start (node_modules lives in the `web_node_modules` volume), so dependency changes are picked up on restart without touching source volumes.
- In the sandbox, Vite's `allowedHosts` is extended from `BASE44_PREVIEW_MODE=1` with `3000-$BASE44_PUBLIC_HOST_SUFFIX` and `.$BASE44_SANDBOX_HOST_DOMAIN`. With the flag unset, the allowlist stays empty (Vite default behaviour).
- No backend and no secrets: the auth pages are UI-only and say so inline when submitted.

## Layout

- `src/pages/` – Landing (/), Demo (/demo), Login, Register, ForgotPassword.
- `src/components/` – Logo, ambient orbs/grain, hero ASCII gradient canvas, auth layout, small UI primitives.
- `src/index.css` – design tokens (light + dark), glass/aurora/motion utilities copied from the original site.
- `src/data/demoSteps.js` – content for the six-step adaptive demo.

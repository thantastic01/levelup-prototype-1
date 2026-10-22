import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The preview proxy forwards the public host (3000-<suffix>.<domain>) and, for
// sandbox-internal traffic, the sandbox host (<port>-<id>.<domain>). Allow both
// only while running in the Base44 sandbox.
const previewHosts =
  process.env.BASE44_PREVIEW_MODE === '1'
    ? [
        `3000-${process.env.BASE44_PUBLIC_HOST_SUFFIX}`,
        `.${process.env.BASE44_SANDBOX_HOST_DOMAIN}`,
      ].filter((host) => !host.includes('undefined'))
    : []

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    allowedHosts: previewHosts,
    watch: {
      usePolling: true,
      interval: 300,
    },
  },
})

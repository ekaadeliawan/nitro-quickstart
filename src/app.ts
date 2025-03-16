// src/app.ts
import type { App } from 'h3';
import { createApp as createH3App } from 'h3'

export function createApp(): App {
  const app = createH3App()

  // Add any global middleware here if needed

  return app
}

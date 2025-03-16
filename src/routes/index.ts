// src/routes/index.ts
import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return {
    success: true,
    message: 'Welcome to Nitro API',
    documentation: {
      api: '/api',
      health: '/api/health',
      docs: '/api/docs',
    },
  }
})

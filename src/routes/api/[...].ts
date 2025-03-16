// src/routes/api/[...].ts
import { defineEventHandler, createError } from 'h3'

export default defineEventHandler(event => {
  const path = event.path || ''

  // Handle undefined routes
  if (!path.startsWith('/api/health') && !path.startsWith('/api/docs')) {
    throw createError({
      statusCode: 404,
      statusMessage: `API endpoint ${path} not found`,
      message: `Available endpoints: /api, /api/docs, /api/echo, /api/health`,
    })
  }
})

// src/error.ts
import type { H3Error } from 'h3'

interface ErrorResponse {
  statusCode: number
  statusMessage: string
  message: string
  stack?: string
}

export default function handleError(error: H3Error): ErrorResponse {
  return {
    statusCode: error.statusCode || 500,
    statusMessage: error.statusMessage || 'Internal Server Error',
    message: error.message,
    stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
  }
}

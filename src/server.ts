// src/server/server.ts
import { createServer } from 'node:http'
import { toNodeListener } from 'h3'
import { createApp } from './app' // Updated path to point to correct location

const port = parseInt(process.env.PORT || '8080', 10) // Convert to number
const host = process.env.HOST || '127.0.0.1'

const app = createApp()
const server = createServer(toNodeListener(app))

server.listen(port, host, () => {
  console.log(`Server listening on http://${host}:${port}`)
})

// Handle graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server')
  server.close(() => {
    console.log('HTTP server closed')
    process.exit(0)
  })
})

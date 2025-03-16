// nitro.config.ts
import { defineNitroConfig } from 'nitropack/config'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNitroConfig({
  // Set compatibility date as requested
  compatibilityDate: '2025-03-16',

  // Source directory configuration
  srcDir: join(currentDir, 'src'),
  scanDirs: ['src/routes'],

  // Route rules
  routeRules: {
    '/api/**': {
      cors: true,
      headers: {
        'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Content-Type': 'application/json',
      },
    },
    '/api/docs': {
      headers: {
        'Content-Type': 'text/html',
      },
    },
  },

  // Development server configuration
  devServer: {
    watch: ['./src/routes/**/*', './src/middleware/**/*'],
  },

  // Development mode flag
  dev: process.env.NODE_ENV === 'development',

  // Output directory configuration
  output: {
    dir: './dist',
    serverDir: './dist/server',
    publicDir: './dist/public',
  },

  // Logging configuration
  logging: {
    compressedSizes: true,
    buildSuccess: true,
  },
})

// src/routes/api/echo.ts
import { defineEventHandler, readBody } from 'h3'

/**
 * @openapi
 * /api/echo:
 *   get:
 *     tags:
 *       - Echo
 *     summary: Get echo message
 *     description: Returns a welcome message
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Welcome Echo!
 *   post:
 *     tags:
 *       - Echo
 *     summary: Echo back the request body
 *     description: Returns whatever was sent in the request body
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             description: Any JSON object
 *     responses:
 *       200:
 *         description: Echo of the request body
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               description: The exact object that was sent
 */
export default defineEventHandler(async event => {
  // Handle GET request
  if (event.method === 'GET') {
    return {
      success: true,
      message: 'Welcome Echo!',
    }
  }

  // Handle POST request
  if (event.method === 'POST') {
    const body = await readBody(event)
    return body
  }
})

// src/routes/api/index.ts
import { defineEventHandler } from 'h3'

/**
 * @openapi
 * /api:
 *   get:
 *     tags:
 *       - API Information
 *     summary: Get API information
 *     description: Returns basic information about the API
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
 *                   example: API is working
 *                 version:
 *                   type: string
 *                   example: 1.0.0
 *                 endpoints:
 *                   type: object
 *                   properties:
 *                     current:
 *                       type: string
 *                       example: /api
 *                     health:
 *                       type: string
 *                       example: /api/health
 *                     docs:
 *                       type: string
 *                       example: /api/docs
 */
export default defineEventHandler(() => {
  return {
    success: true,
    message: 'API is working',
    version: '1.0.0',
    endpoints: {
      current: '/api',
      health: '/api/health',
      docs: '/api/docs',
    },
  }
})

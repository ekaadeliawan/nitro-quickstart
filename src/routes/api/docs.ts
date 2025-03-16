// src/routes/api/docs.ts
import { defineEventHandler } from 'h3'
import swaggerJsdoc from 'swagger-jsdoc'

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Nitro API Documentation',
      version: '1.0.0',
      description: 'API documentation using Swagger/OpenAPI 3.0',
    },
    servers: [
      {
        url: 'http://localhost:8080',
        description: 'Local Development Server',
      },
    ],
  },
  apis: ['./src/routes/api/**/*.ts'],
}

const swaggerSpec = swaggerJsdoc(swaggerOptions)

export default defineEventHandler(event => {
  if (event.path === '/api/docs') {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="API Documentation" />
    <title>API Documentation</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swagger-ui-dist@5.11.0/swagger-ui.css" />
    <style>
      body {
        margin: 0;
        transition: background-color 0.3s ease;
      }
      
      /* Light theme (default) */
      body {
        background-color: #ffffff;
      }
      
      /* Dark theme overrides */
      body.dark-theme {
        background-color: #1a1a1a;
      }
      
      .dark-theme .swagger-ui {
        background-color: #1a1a1a;
        color: #ffffff;
      }
      /* Request body section */
      .dark-theme .swagger-ui .body-param__text {
        background-color: #333333;
        color: #ffffff;
      }

      /* URL text next to HTTP methods */
      .dark-theme .swagger-ui .opblock .opblock-summary-path {
        color: #ffffff;
      }
        /* Parameters background */
      .dark-theme .swagger-ui .parameters-container,
      .dark-theme .swagger-ui .opblock-description-wrapper,
      .dark-theme .swagger-ui .opblock-external-docs-wrapper,
      .dark-theme .swagger-ui .opblock-title_normal {
        background-color: #2d2d2d;
      }

      /* Table alternating rows */
      .dark-theme .swagger-ui tr {
        background-color: #2d2d2d !important;
        border-color: #404040;
      }

      /* Code examples */
      .dark-theme .swagger-ui .highlight-code,
      .dark-theme .swagger-ui .microlight {
        background-color: #333333;
        color: #ffffff;
      }

      /* Topbar styling */
      .dark-theme .swagger-ui .topbar {
        background-color: #2d2d2d;
      }
      
      /* Models section */
      .dark-theme .swagger-ui .model-box {
        background-color: #2d2d2d;
      }
      
      /* Schema styling */
      .dark-theme .swagger-ui .model {
        color: #ffffff;
      }
      
      /* General text colors */
      .dark-theme .swagger-ui .opblock .opblock-summary-path,
      .dark-theme .swagger-ui .opblock .opblock-summary-path__deprecated,
      .dark-theme .swagger-ui .opblock .opblock-summary-method,
      .dark-theme .swagger-ui .tab li button.tablinks,
      .dark-theme .swagger-ui .responses-inner h4,
      .dark-theme .swagger-ui .responses-inner h5,
      .dark-theme .swagger-ui .response-col_status,
      .dark-theme .swagger-ui .response-col_links,
      .dark-theme .swagger-ui .response-col_description,
      .dark-theme .swagger-ui .parameters-col_description,
      .dark-theme .swagger-ui .parameter__name,
      .dark-theme .swagger-ui .parameter__type,
      .dark-theme .swagger-ui .parameter__deprecated,
      .dark-theme .swagger-ui .parameter__in,
      .dark-theme .swagger-ui .parameter__enum,
      .dark-theme .swagger-ui table.parameters td,
      .dark-theme .swagger-ui table.responses-table td,
      .dark-theme .swagger-ui .opblock-description-wrapper p,
      .dark-theme .swagger-ui .opblock-external-docs-wrapper p,
      .dark-theme .swagger-ui .opblock-title_normal p,
      .dark-theme .swagger-ui .model-title,
      .dark-theme .swagger-ui .model,
      .dark-theme .swagger-ui .model-toggle,
      .dark-theme .swagger-ui .model .property.primitive,
      .dark-theme .swagger-ui .model-box .model-title,
      .dark-theme .swagger-ui .model .property,
      .dark-theme .swagger-ui section.models h4,
      .dark-theme .swagger-ui .tab li,
      .dark-theme .swagger-ui .response-control-media-type__accept-message,
      .dark-theme .swagger-ui .response-control-media-type__title,
      .dark-theme .swagger-ui .opblock-summary-description,
      .dark-theme .swagger-ui .opblock .opblock-section-header h4,
      .dark-theme .swagger-ui .opblock .opblock-section-header > label,
      .dark-theme .swagger-ui .scheme-container .schemes > label,
      .dark-theme .swagger-ui .server-container .servers > label,
      .dark-theme .swagger-ui .servers-title,
      .dark-theme .swagger-ui .servers > label {
        color: #ffffff;
      }
      
      /* Operation blocks */
      .dark-theme .swagger-ui .opblock {
        background-color: #2d2d2d;
        border-color: #404040;
      }
      
      .dark-theme .swagger-ui .opblock .opblock-summary {
        border-color: #404040;
      }
      
      .dark-theme .swagger-ui .opblock .opblock-section-header {
        background-color: #2d2d2d;
        border-color: #404040;
      }
      
      /* Scheme container */
      .dark-theme .swagger-ui .scheme-container {
        background-color: #2d2d2d;
        box-shadow: none;
      }
      
      /* Tables */
      .dark-theme .swagger-ui table tbody tr td {
        background-color: #2d2d2d;
        color: #ffffff;
        border-color: #404040;
      }
      
      /* Modal dialogs */
      .dark-theme .swagger-ui .dialog-ux .modal-ux {
        background-color: #2d2d2d;
        border-color: #404040;
      }
      
      .dark-theme .swagger-ui .dialog-ux .modal-ux-header {
        background-color: #1a1a1a;
        border-color: #404040;
      }
      
      .dark-theme .swagger-ui .dialog-ux .modal-ux-content {
        background-color: #2d2d2d;
        color: #ffffff;
      }
      
      /* Code blocks */
      .dark-theme .swagger-ui .highlight-code {
        background-color: #2d2d2d;
      }
      
      /* Buttons */
      .theme-button {
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 8px;
        background: none;
        border: none;
        cursor: pointer;
        font-size: 24px;
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.3s ease;
      }
      
      .theme-button:hover {
        transform: scale(1.1);
      }
      
      /* Markdown content */
      .dark-theme .swagger-ui .markdown p,
      .dark-theme .swagger-ui .markdown pre,
      .dark-theme .swagger-ui .renderedMarkdown p,
      .dark-theme .swagger-ui .renderedMarkdown pre {
        color: #ffffff;
      }
      
      /* Try it out section */
      .dark-theme .swagger-ui .try-out__btn {
        background-color: #4a4a4a;
        color: #ffffff;
      }
      
      .dark-theme .swagger-ui .try-out__btn:hover {
        background-color: #666666;
      }
      
      /* Input fields */
      .dark-theme .swagger-ui input,
      .dark-theme .swagger-ui select,
      .dark-theme .swagger-ui textarea {
        background-color: #333333;
        color: #ffffff;
        border-color: #404040;
      }
      
      /* Authorization button */
      .dark-theme .swagger-ui .auth-wrapper .authorize {
        background-color: #4a4a4a;
        color: #ffffff;
        border-color: #404040;
      }
      
      .dark-theme .swagger-ui .auth-wrapper .authorize:hover {
        background-color: #666666;
      }
    </style>
</head>
<body>
    <div id="swagger-ui"></div>
    <script src="https://cdn.jsdelivr.net/npm/swagger-ui-dist@5.11.0/swagger-ui-bundle.js" crossorigin></script>
    <script>
        // Theme toggle function
        function toggleTheme(isDark) {
          document.body.classList.toggle('dark-theme', isDark);
          localStorage.setItem('swagger-theme', isDark ? 'dark' : 'light');
          
          // Update button text to show icon only
          const themeButton = document.getElementById('theme-toggle');
          if (themeButton) {
            themeButton.innerText = isDark ? '☀️' : '🌙';
          }
        }

        window.onload = () => {
            // Check saved theme preference
            const savedTheme = localStorage.getItem('swagger-theme');
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const isDark = savedTheme ? savedTheme === 'dark' : prefersDark;
            
            toggleTheme(isDark);

            window.ui = SwaggerUIBundle({
                spec: ${JSON.stringify(swaggerSpec)},
                dom_id: '#swagger-ui',
                deepLinking: true,
                presets: [
                    SwaggerUIBundle.presets.apis,
                    SwaggerUIBundle.SwaggerUIStandalonePreset
                ],
                layout: "BaseLayout",
                supportedSubmitMethods: ['get', 'post', 'put', 'delete', 'patch'],
                syntaxHighlight: {
                    theme: isDark ? 'monokai' : 'agate'
                }
            });

            // Create and add theme toggle button
            const themeButton = document.createElement('button');
            themeButton.id = 'theme-toggle';
            themeButton.className = 'theme-button';
            themeButton.innerText = isDark ? '☀️' : '🌙';
            themeButton.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
            themeButton.onclick = () => {
                const currentTheme = localStorage.getItem('swagger-theme');
                const newIsDark = currentTheme !== 'dark';
                toggleTheme(newIsDark);
            };
            document.body.appendChild(themeButton);
        };
    </script>
</body>
</html>`
  }

  return swaggerSpec
})

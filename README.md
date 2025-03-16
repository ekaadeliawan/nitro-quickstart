# Standalone Nitro API Server

A lightweight, fast API server built with Nitro that includes Swagger documentation, theme support, and example endpoints.
You can use this project to accompany your nuxtJs that is configured as static, or you can use it for other api server purposes.

## Features

- 🚀 Fast and lightweight API server
- 📚 Interactive API documentation with Swagger UI
- 🌓 Light/Dark theme support
- ⚡ Hot module reloading in development
- 🔄 Echo endpoint example
- 🛠️ TypeScript support
- 📝 OpenAPI 3.0 specification

## Project Structure

```
nitro_quickstart/
├── src/
│ ├── routes/
│ │ ├── index.ts # Root endpoint
│ │ └── api/
│ │ ├── index.ts # API information endpoint
│ │ ├── echo.ts # Echo endpoint example
│ │ ├── health.ts # Health check endpoint
│ │ └── docs.ts # Swagger UI documentation
│ └── middleware/ # API middleware (optional)
├── dist/ # Build output
├── .gitignore
├── package.json
├── pnpm-lock.yaml
├── nitro.config.ts # Nitro configuration
├── tsconfig.json # TypeScript configuration
└── README.md
```

## Prerequisites

- Node.js (v22.12.0 or later)
- pnpm (v10.6.2 or later)

## Installation

```bash
# Clone the repository
git clone [repository-url]
cd nitro_quickstart

# Install dependencies
pnpm install
```

## Development

```bash
# Start development server with hot reload
pnpm dev

# Clean up cached files
pnpm clean:all

# Lint and fix files
pnpm lint:fix
```

The development server will start at http://127.0.0.1:8080

## Production Build

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

## API Documentation

### Interactive API documentation is available at:

- Development: http://127.0.0.1:8080/api/docs
- Production: [your-domain]/api/docs

### Features:

- Interactive API testing
- Light/Dark theme toggle
- Request/Response examples
- OpenAPI 3.0 specification

### Available Endpoints

#### Root
- `GET /` - Welcome message and API information

#### API
- `GET /api` - API information and available endpoints
- `GET /api/health` - Health check endpoint
- `GET /api/echo` - Echo service welcome message
- `POST /api/echo` - Echo back the request body
- `GET /api/docs` - Interactive API documentation

### Configuration

```env
Environment Variables
PORT=8080 # Server port (default: 8080)
HOST=127.0.0.1 # Server host (default: 127.0.0.1)
NODE_ENV=development # Environment (development/production)
```

### Nitro Configuration
Key configurations in nitro.config.ts:
- Source directory setup
- API route rules
- CORS settings
- Development server options
- Build output configuration

## Development Guidelines
1. Adding New Routes
- Create new route files in src/routes/api/
- Use OpenAPI decorators for documentation
- Follow the existing pattern for consistency

2. API Documentation
- Document all endpoints using OpenAPI decorators
- Include request/response examples
- Add proper descriptions and types

3. Type Safety
- Use TypeScript for all new code
- Define interfaces for request/response objects
- Maintain strict type checking

## Scripts
```json
{
"dev": "Start development server",
"dev:clean" : "Clean up cached files and start development server",
"build": "Build for production",
"start": "Start production server",
"clean:all": "Clean up node_modules and all cached files",
"lint": "Run ESLint",
"lint:fix": "See all ESLint issues",
"lint:fix": "Fix ESLint issues"
}
```

## Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License
Open Source


## Support
For support, please create an issue.
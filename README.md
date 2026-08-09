# code-agent-terminal

This repository contains an Edge Runtime implementation that can be deployed to Cloudflare Workers.

## Features

- Edge computing capabilities
- Fast, global deployment
- Low latency responses
- Serverless architecture

## Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run locally:
   ```bash
   npm run dev
   ```

3. Deploy to Cloudflare Workers:
   ```bash
   npm run deploy
   ```

## Endpoints

- `/` - Returns a simple text response
- `/json` - Returns a JSON response with a message and timestamp

## Requirements

- Node.js 18+
- Cloudflare account for deployment
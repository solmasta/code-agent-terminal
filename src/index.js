/**
 * Welcome to the Edge Runtime Terminal!
 * This is a basic worker that demonstrates Edge Runtime capabilities.
 */

export default {
  async fetch(request, env, ctx) {
    const { pathname } = new URL(request.url);
    
    // Handle different routes
    if (pathname === '/health') {
      return new Response('OK', { status: 200 });
    }
    
    if (pathname === '/api/echo') {
      const data = {
        message: 'Hello from Edge Runtime!',
        timestamp: new Date().toISOString(),
        url: request.url,
        method: request.method
      };
      return new Response(JSON.stringify(data, null, 2), {
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Default response
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Code Agent Terminal</title>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <style>
            body {
              font-family: monospace;
              max-width: 800px;
              margin: 0 auto;
              padding: 2rem;
              background: #1a1a1a;
              color: #00ff00;
            }
            .terminal {
              background: #000;
              padding: 1rem;
              border-radius: 4px;
              border: 1px solid #333;
            }
            .command {
              color: #fff;
            }
            .response {
              color: #00ff00;
            }
          </style>
        </head>
        <body>
          <h1>Code Agent Terminal</h1>
          <div class="terminal">
            <div class="command">$ curl https://your-worker.dev/api/echo</div>
            <div class="response">
              {
                "message": "Hello from Edge Runtime!",
                "timestamp": "${new Date().toISOString()}",
                "url": "${request.url}",
                "method": "${request.method}"
              }
            </div>
          </div>
          <p>Available endpoints:</p>
          <ul>
            <li><code>GET /</code> - This page</li>
            <li><code>GET /health</code> - Health check</li>
            <li><code>GET /api/echo</code> - Echo API response</li>
          </ul>
        </body>
      </html>
    `;
    
    return new Response(html, {
      headers: { 'Content-Type': 'text/html' }
    });
  }
};
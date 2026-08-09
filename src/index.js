export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    if (url.pathname === '/') {
      return new Response('Hello from Edge Runtime!', {
        headers: {
          'content-type': 'text/plain',
        },
      });
    }
    
    if (url.pathname === '/json') {
      return new Response(JSON.stringify({ message: 'Hello World!', timestamp: Date.now() }), {
        headers: {
          'content-type': 'application/json',
        },
      });
    }
    
    return new Response('Not Found', { status: 404 });
  }
};
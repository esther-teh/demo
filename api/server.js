import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const auth = req.headers.authorization || '';
  const username = 'admin';
  const password = 'mypassword';
  const credentials = Buffer.from(`${username}:${password}`).toString('base64');

  // Check Basic Auth header
  if (auth !== `Basic ${credentials}`) {
    res.statusCode = 401;
    res.setHeader('WWW-Authenticate', 'Basic realm="Restricted"');
    res.end('Unauthorized');
    return;
  }

  // Serve static file from dist
  let filePath = req.url === '/' ? '/index.html' : req.url;
  const fullPath = path.join(process.cwd(), 'dist', filePath);

  fs.readFile(fullPath, (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.end('Not Found');
      return;
    }
    res.setHeader('Content-Type', getContentType(filePath));
    res.end(data);
  });
}

// Basic MIME type detection
function getContentType(filePath) {
  if (filePath.endsWith('.js')) return 'text/javascript';
  if (filePath.endsWith('.css')) return 'text/css';
  if (filePath.endsWith('.html')) return 'text/html';
  if (filePath.endsWith('.json')) return 'application/json';
  return 'text/plain';
}

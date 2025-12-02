export default function handler(req, res) {
  const auth = req.headers.authorization;

  // Change these to your own username/password
  const username = 'admin';
  const password = 'mypassword';

  const base64Credentials = Buffer.from(`${username}:${password}`).toString('base64');

  if (!auth || auth !== `Basic ${base64Credentials}`) {
    res.statusCode = 401;
    res.setHeader('WWW-Authenticate', 'Basic realm="Restricted"');
    res.end('Unauthorized');
    return;
  }

  // If authorized, serve the static site
  res.statusCode = 200;
  res.end('Authorized'); // This will allow Vercel to continue serving your static files
}

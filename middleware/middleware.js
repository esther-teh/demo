export default function handler(req, res) {
  const auth = req.headers.authorization;

  // Replace with your username:password
  const username = 'admin';
  const password = 'mypassword';

  const base64Credentials = Buffer.from(`${username}:${password}`).toString('base64');

  if (!auth || auth !== `Basic ${base64Credentials}`) {
    res.statusCode = 401;
    res.setHeader('WWW-Authenticate', 'Basic realm="Restricted"');
    res.end('Unauthorized');
    return;
  }

  res.statusCode = 200;
  res.end('Authorized');
}

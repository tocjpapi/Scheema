// server.mjs
import express from 'express';
import { Dropbox } from 'dropbox';
import crypto from 'crypto';

const app = express();
const hostname = 'localhost';
const port = 3000;

// Replace with your Dropbox app credentials
const clientId = 'ekpf8o9wpkutry2'; 
const clientSecret = 'srt05sy5qy36zxg'; // Optional in PKCE flow
const redirectUri = `http://${hostname}:${port}/auth`;

// Generate a code verifier and code challenge
const generateCodeVerifier = () => {
  return crypto.randomBytes(32).toString('hex');
};

const generateCodeChallenge = (verifier) => {
  return crypto
    .createHash('sha256')
    .update(verifier)
    .digest('base64url');
};

let codeVerifier = generateCodeVerifier();
let codeChallenge = generateCodeChallenge(codeVerifier);

const dbx = new Dropbox({
  clientId,
  fetch
});

app.get('/', (req, res) => {
  dbx.auth.getAuthenticationUrl(
    redirectUri,
    null,
    'code',
    'offline',
    null,
    'none',
    true,
    {
      codeChallenge,
      codeChallengeMethod: 'S256' // PKCE method
    }
  ).then((authUrl) => {
    res.writeHead(302, { Location: authUrl });
    res.end();
  });
});

app.get('/auth', (req, res) => {
  const { code } = req.query;

  dbx.auth.getAccessTokenFromCode(redirectUri, code, codeVerifier)
    .then((token) => {
      console.log(`Token Result:${JSON.stringify(token)}`);
      console.log(`Refresh Token: ${token.result.refresh_token}`);
      res.send(`Auth successful! Your refresh token is: ${token.result.refresh_token}`);
    })
    .catch((error) => {
      console.error('Error getting access token:', error);
      res.send('Error during Dropbox authentication.');
    });
});

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

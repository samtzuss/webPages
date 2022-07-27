const fs = require('fs');
// const http = require('http');
const https = require('https');
const bodyParser = require('body-parser');
const express = require('express');
const { bottender } = require('bottender');

const options = {
  key: fs.readFileSync('./ssl/privkey.pem', 'utf8'),
  cert: fs.readFileSync('./ssl/fullchain.pem', 'utf8')
};

console.log(options.key);
console.log(options.cert);

const app = bottender({
  dev: process.env.NODE_ENV !== 'production',
});

const port = Number(process.env.PORT) || 5000;

// the request handler of the bottender app
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  const verify = (req, _, buf) => {
    req.rawBody = buf.toString();
  };
  server.use(bodyParser.json({ verify }));
  server.use(bodyParser.urlencoded({ extended: false, verify }));

  // your custom route
  server.get('/api', (req, res) => {
    res.json({ ok: true });
  });

  // route for webhook request
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  https.createServer(options, server).listen(port, '0.0.0.0', (err) => {
    if (err) throw err;
    console.log(`> Ready on https://0.0.0.0:${port}`);
  });
});

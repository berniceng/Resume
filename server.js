const http = require('http');
const https = require('https');
const path = require('path');
const fs = require('fs');
const express = require('express');
const serveStatic = require('serve-static');
const compression = require('compression');
const uuid = require('uuid');
const dotenv = require('dotenv');

dotenv.config();

let isHTTPS = false;
const etag = uuid.v4();
const PORT = process.env.PORT || 9000;

if (!process.env.BASE_URL) {
  console.error(`\nMissing environment variable: BASE_URL\n`);
  process.exit(126);
}

function setEnvInBundle() {
  try {
    const requiredEnvs = Object.keys(dotenv.parse(fs.readFileSync(path.resolve(__dirname, '.env.dist'))));

    const missingEnvs = requiredEnvs.filter(env => !process.env[env]);

    if (missingEnvs.length) {
      console.error(`\nMissing environment variable(s): ${missingEnvs.join(',')}\n`);
      process.exit(126);
    }

    const dir = fs.readdirSync(path.resolve(__dirname, 'dist'));

    dir.forEach(filename => {
      if (filename.search('bundle') !== -1) {
        let bundle = fs.readFileSync(path.resolve(__dirname, `dist/${filename}`), 'utf8');

        // Used for replacing prefix of api in bundle

        // const prefix = bundle.match(/API_URL:(.*)\.env\.API_URL/)[1];

        // requiredEnvs.forEach(env => {
        //   if (process.env[env] !== undefined) {
        //     bundle = bundle.replace(`${prefix}.env.${env}`, `"${process.env[env]}"`);
        //   }
        // });
        fs.writeFileSync(path.resolve(__dirname, `dist/${filename}`), bundle, 'utf8');
      }
    });
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }
}

setEnvInBundle();

const app = express();
app.use(compression());
app.disable('x-powered-by');

// https
app.all('*', (req, res, next) => {
  if (!isHTTPS || req.secure) {
    return next();
  }
  res.redirect(`https://${req.hostname}${req.url}`);
});

// force base url
app.all('*', (req, res, next) => {
  if (req.url === process.env.BASE_URL || req.url.startsWith(process.env.BASE_URL)) {
    return next();
  }
  console.info(`Missing baseURL: redirect ${req.url} to ${process.env.BASE_URL}`);
  return res.redirect(process.env.BASE_URL);
});

// static
app.use(process.env.BASE_URL, serveStatic(path.resolve(__dirname, 'dist'), {
  index: 'index.html',
  setHeaders: (res => res.setHeader('Etag', etag)),
}));

// serve index.html
app.use((_, res) => {
  res
    .header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
    .header('Expires', '-1')
    .header('Pragma', 'no-cache')
    .header('Etag', etag)
    .sendFile(path.join(__dirname + '/dist/index.html'));
});

let server;
try {
  const options = {
    key: fs.readFileSync(process.env.PATH_SSL_KEY),
    cert: fs.readFileSync(process.env.PATH_SSL_CERT),
    ca: [fs.readFileSync(process.env.PATH_SSL_CA)],
    rejectUnauthorized: true,
  };
  http.createServer(app).listen(9080);
  server = https.createServer(options, app);
  isHTTPS = true;
} catch (err) {
  server = http.createServer(app);
  isHTTPS = false;
}

server.listen(PORT);
server.on('listening', onListening);

function onListening() {
  console.info(`Listening on ${PORT} with BASE_URL=${process.env.BASE_URL}`);
}

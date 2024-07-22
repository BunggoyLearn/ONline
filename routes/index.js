/* // Package Imports
const express = require('express');
const router = express.Router();
const path = require('path');

const dashboardRoutes = require('../controllers/dashboard');
const homeRoutes = require('../controllers/home-controller');
const apiRoutes = require('../controllers/api');

// Controllers and Routes
router.use('/dashboard', dashboardRoutes);
router.use('/', homeRoutes);
router.use('/api', apiRoutes);


// Use Controllers and Routes
router.use('/dashboard', dashboardRoutes);
router.use('/', homeRoutes);
router.use('/api', apiRoutes); */

/* router.get('index.html', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'))
});

router.get('', (req, res) => {
    res.sendFile(path.join(__dirname, '..', ''))
}); */

/*************************  new code for review  ****************************/

/* const http = require('http');
const fs = require('fs');
const fsPromises = require('fs').promises;

const PORT = process.env.DB_DEV_PORT || 3001;

const serveFile = async (filePath, contentType, response) => {
    try {
        const rawData = await fsPromises.readFile(
            filePath,
            !contentType.includes('image') ? 'utf8' : ''
        );
        const data = contentType === 'application/json'
            ? JSON.parse(rawData) : rawData;
        response.writeHead(
            filePath.includes('404.html') ? 404 : 200,
            { 'Content-Type': contentType }
        );
        response.end(
            contentType === 'application/json' ? JSON.stringify(data) : data
        );
    } catch (err) {
        console.log(err);
    }
}

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  const extension = path.extname(req.url);

  let contentType;

  switch (extension) {
      case '.css':
          contentType = 'text/css';
          break;
      case '.js':
          contentType = 'text/javascript';
          break;
      case '.json':
          contentType = 'application/json';
          break;
      case '.jpg':
          contentType = 'image/jpeg';
          break;
      case '.png':
          contentType = 'image/png';
          break;
      case '.txt':
          contentType = 'text/plain';
          break;
      default:
          contentType = 'text/html';
  }

  let filePath =
  contentType === 'text/html' && req.url === '/'
      ? path.join(__dirname, '..', 'index.html')
      : contentType === 'text/html' && req.url.slice(-1) === '/'
          ? path.join(__dirname, '..', req.url, 'index.html')
          : contentType === 'text/html'
              ? path.join(__dirname, '..', req.url)
              : path.join(__dirname, req.url);

    // makes .html extension not required in the browser
    if (!extension && req.url.slice(-1) !== '/') filePath += '.html';

    const fileExists = fs.existsSync(filePath);

    if (fileExists) {
        serveFile(filePath, contentType, res);
    } else {
        switch (path.parse(filePath).base) {
            case 'old-page.html':
                res.writeHead(301, { 'Location': '/new-page.html' });
                res.end();
                break;
            case 'www-page.html':
                res.writeHead(301, { 'Location': '/' });
                res.end();
                break;
            default:
                serveFile(path.join(__dirname, 'html', '404.html'), 'text/html', res);
        }
    }
});
server.listen(PORT, () => console.log(`Server running on port ${PORT}`)); */

/*************************************  End  **********************************/

const express = require('express');
const router = express.Router();

const dashboardRoutes = require('../controllers/dashboard');
const homeRoutes = require('../controllers/home-controller');
const apiRoutes = require('../controllers/api');
const eventsRoutes = require('../controllers/events');

// Use Controllers and Routes
router.use('/dashboard', dashboardRoutes);
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/events', eventsRoutes);


module.exports = router;
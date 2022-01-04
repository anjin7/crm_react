const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware(['/api', '/api/customers'], {
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );
};

// const express = require('express');
// const { createProxyMiddleware } = require('http-proxy-middleware');

// const app = express();

// app.use('/api', 
// createProxyMiddleware({ 
//   target: 'http://localhost:5000', 
//   changeOrigin: true 
// })
// );
// app.listen(5000);
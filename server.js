const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

const generateAASA = () => {
    return {
      applinks: {
        apps: [],
        details: [
          {
            appID: `7PGNU69TNW.com.mamsb.myahb.innov`,
            paths: ["/dashboard/*"]
          }
        ]
      }
    };
  };
  
  // Serve the dynamically generated AASA content
  app.get('/.well-known/apple-app-site-association', (req, res) => {
    const aasaContent = JSON.stringify(generateAASA(), null, 2);
    res.header('Content-Type', 'application/json');
    res.send(aasaContent);
  });
  
  // Serve the /dashboard route
  app.get('/dashboard', (req, res) => {
    res.send('Welcome to the dashboard!');
  });

  app.get('/', (req, res) => {
    res.send('Hello world');
  });
  
  app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
  });
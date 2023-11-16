const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const getSmartBanner = require("./SmartBanner");

const app = express();
const port = process.env.PORT || 3000;

const generateAASA = () => {
  return {
    applinks: {
      apps: [],
      details: [
        {
          appID: `7PGNU69TNW.com.mamsb.myahb.innov`,
          paths: ["*"],
        },
      ],
    },
  };
};

// Serve the dynamically generated AASA content
app.get("/.well-known/apple-app-site-association", (req, res) => {
  const aasaContent = JSON.stringify(generateAASA(), null, 2);
  res.header("Content-Type", "application/json");
  res.send(aasaContent);
});

// Serve the /dashboard route
app.get("/dashboard", (req, res) => {
  const smartBanner = getSmartBanner();
  const userAgent = req.headers['user-agent'];
  const isIOS = /iPhone|iPad/.test(userAgent);
  console.log('jbdaj', isIOS)
  // Send the dashboard with the smart banner
  res.send(`
    <html>
      <head>
        <!-- Include other head elements as needed -->
        ${smartBanner(isIOS)}
      </head>
      <body>
        <h1>Welcome to the dashboard!</h1>
        <!-- Include other body elements as needed -->
      </body>
    </html>
  `);
});

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

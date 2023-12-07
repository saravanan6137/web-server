const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const getBanner = require("./SmartBanner");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, "/")));

const generateAASA = () => {
  return {
    applinks: {
      apps: [],
      details: [
        {
          appID: `7PGNU69TNW.com.mamsb.myahb.innov`,
          components: [
            {
              "/": "*"
            },
          ],
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

app.get("/.well-known/assetlinks.json", (req, res) => {
  res.sendFile(path.join(__dirname, "/assetlinks.json"));
});

// Serve the /dashboard route
app.get("/scanandpay", (req, res) => {
  const userAgent = req.headers["user-agent"];
  const isIOS = /iPhone|iPad/.test(userAgent);
  let banner;
  if (isIOS) {
    banner = getBanner(
      "MAE UAT",
      "The myAHB Mobile App is the official mobile app by Maybank Asset Management Sdn Bhd, who is fully owned by Maybank Asset Management Group. The mobile app allows its users to safely and conveniently access and view their AHB investment portfolio all in one app on their mobile/tablet devices. The app is only applicable to Maybank AHB account holders.",
      "app-icon.png",
      "https://apple.co/47zd5Xj"
    );
  } else {
    banner = getBanner(
      "MAE UAT",
      "The MAE app has all your M2U banking features and beyond. Apart from viewing, tracking, and managing your finances, the MAE app helps you manage tasks and plan your lifestyle with just a few taps.",
      "app-icon.png",
      "https://play.google.com/store/apps/details?id=com.maybank2u.life&hl=en-MY"
    );
  }

  // Send the dashboard with the smart banner
  res.send(`
    <html>
    <head>
      <title>Your App Name</title>
      <link rel="stylesheet" href="styles.css">
    </head>
    <body>
      ${banner}
      <h1>Welcome to the Scan and Pay!</h1>
      <!-- Other dashboard content goes here -->
    </body>
  </html>
    `);
});

app.get("/createtabung", (req, res) => {
  const userAgent = req.headers["user-agent"];
  const isIOS = /iPhone|iPad/.test(userAgent);
  let banner;
  if (isIOS) {
    banner = getBanner(
      "MAE UAT",
      "The myAHB Mobile App is the official mobile app by Maybank Asset Management Sdn Bhd, who is fully owned by Maybank Asset Management Group. The mobile app allows its users to safely and conveniently access and view their AHB investment portfolio all in one app on their mobile/tablet devices. The app is only applicable to Maybank AHB account holders.",
      "app-icon.png",
      "https://apple.co/47zd5Xj"
    );
  } else {
    banner = getBanner(
      "MAE UAT",
      "The MAE app has all your M2U banking features and beyond. Apart from viewing, tracking, and managing your finances, the MAE app helps you manage tasks and plan your lifestyle with just a few taps.",
      "app-icon.png",
      "https://play.google.com/store/apps/details?id=com.maybank2u.life&hl=en-MY"
    );
  }

  // Send the dashboard with the smart banner
  res.send(`
    <html>
    <head>
      <title>Your App Name</title>
      <link rel="stylesheet" href="styles.css">
    </head>
    <body>
      ${banner}
      <h1>Welcome to the Tabung!</h1>
      <!-- Other dashboard content goes here -->
    </body>
  </html>
    `);
});

app.get("/investmentTransaction", (req, res) => {
  const userAgent = req.headers["user-agent"];
  const isIOS = /iPhone|iPad/.test(userAgent);
  let banner;
  if (isIOS) {
    banner = getBanner(
      "MyAhb",
      "The myAHB Mobile App is the official mobile app by Maybank Asset Management Sdn Bhd, who is fully owned by Maybank Asset Management Group. The mobile app allows its users to safely and conveniently access and view their AHB investment portfolio all in one app on their mobile/tablet devices. The app is only applicable to Maybank AHB account holders.",
      "app-icon.png",
      "https://apple.co/47zd5Xj"
    );
  } else {
    banner = getBanner(
      "MyAhb",
      "The myAHB Mobile App is the official mobile app by Maybank Asset Management Sdn Bhd, who is fully owned by Maybank Asset Management Group. The mobile app allows its users to safely and conveniently access and view their AHB investment portfolio all in one app on their mobile/tablet devices. The app is only applicable to Maybank AHB account holders.",
      "app-icon.png",
      "https://play.google.com/store/apps/details?id=com.mamsb.myahb&hl=en-MY"
    );
  }

  // Send the dashboard with the smart banner
  res.send(`
    <html>
    <head>
      <title>Your App Name</title>
      <link rel="stylesheet" href="styles.css">
    </head>
    <body>
      ${banner}
      <h1>Welcome to the investmentTransaction!</h1>
      <!-- Other dashboard content goes here -->
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

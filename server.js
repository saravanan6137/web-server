const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const getBanner = require("./SmartBanner");
const app = express();
const port = process.env.PORT || 9000;
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
app.get("/*", (req, res) => {
  const userAgent = req.headers["user-agent"];
  const isIOS = /iPhone|iPad/.test(userAgent);  
  if (isIOS) {
    res.redirect("https://apple.co/47zd5Xj");
  } else {
    res.redirect("https://play.google.com/store/apps/details?id=com.maybank2u.life&hl=en-MY");
  }
});

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

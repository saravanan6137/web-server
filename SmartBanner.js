const getSmartBanner = (isIOS) => {
  if (isIOS) {
    // iOS Smart App Banner
    return `
    <meta name="apple-itunes-app" content="app-id=1581543726">
        `;
  } else {
    // Android Smart App Banner
    return `
          <meta name="google-play-app" content="app-id=com.example.myapp">
        `;
  }
};

module.exports = getSmartBanner;

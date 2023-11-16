const getSmartBanner = (isIOS) => {
  if (isIOS) {
    // iOS Smart App Banner
    return `
      <meta name="apple-itunes-app" content="app-id=1581543726">
      `;
  } else {
    // Android Smart App Banner
    return `
      <meta name="apple-itunes-app" content="app-id=1581543726">
      `;
  }
  // Include other meta tags as needed
};
// Export the function directly
module.exports = getSmartBanner;

const getBanner = (appName, appDescription, appIcon, installLink) => {
    return `
    <style>
      /* Styles for the banner component */
      @keyframes slideIn {
        from {
          transform: translateY(-100%);
        }
        to {
          transform: translateY(0);
        }
      }

      .banner {
        background-color: #f5f5f5;
        padding: 20px;
        text-align: center;
        border-radius: 15px; /* Adjust the radius as needed */
        margin: 10px; /* Add a 10px margin on all sides */
        animation: slideIn 0.5s ease-out; /* Animation definition */
      }

      .banner-content {
        max-width: 600px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        margin-right: 20px;
      }

      .text-content {
        text-align: left;
      }

      h2 {
        font-size: 1.5em;
        margin-bottom: 10px;
      }

      p {
        color: #666;
        margin-bottom: 15px;
      }

      .install-button {
        display: inline-block;
        padding: 10px 20px;
        background-color: #007BFF;
        color: #fff;
        text-decoration: none;
        border-radius: 5px;
        font-weight: bold;
        transition: background-color 0.3s ease;
      }

      .install-button:hover {
        background-color: #0056b3;
      }
    </style>

    <!-- Banner Section -->
    <section class="banner">
      <div class="banner-content">
        <img src="${appIcon}" alt="App Icon">
        <div class="text-content">
          <h2>${appName}</h2>
          <p>${appDescription}</p>
          <a href="${installLink}" class="install-button" target="_blank">Install Now</a>
        </div>
      </div>
    </section>
  `;
};

module.exports = getBanner;

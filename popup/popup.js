const axios = require("axios");
function getCurrentWindowTabs() {
  return browser.tabs.query({ url: "<all_urls>" });
}

document.getElementById("pushButton").addEventListener("click", (e) => {
  getCurrentWindowTabs().then((tabs) => {
    const config = require("./config.json");

    axios
      .post(`${config.server}/push`, tabs)
      .then((response) => {})
      .catch((err) => {
        console.log(err);
      });
  });
});

document.getElementById("pullButton").addEventListener("click", (e) => {
  const config = require("./config.json");

  axios
    .get(`${config.server}/pull`)
    .then((response) => {
      Object.keys(response.data).forEach((tab) => {
        browser.tabs.create({ url: response.data[tab].url });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

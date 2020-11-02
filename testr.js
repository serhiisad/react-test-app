const fetch = require("node-fetch");

fetch("news.json")
  .then((resp) => resp.text())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

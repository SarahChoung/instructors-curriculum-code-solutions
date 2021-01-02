const takeAChance = require("./take-a-chance");

const myPromise = takeAChance("Sarah")
  .then((res) => console.log(res))
  .catch((err) => console.error(err.message));

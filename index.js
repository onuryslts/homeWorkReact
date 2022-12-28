import getUser from "./app.js";

getUser(1)
  .then((res) => console.log(res))
  .catch((e) => console.log(e));

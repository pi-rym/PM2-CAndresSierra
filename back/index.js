const app = require("./src/server");
const DBCon = require("./src/config/DBCon")


DBCon().then(() => {
  app.listen(3000, () => {
    console.log("Server escuchando dentro del puerto 3000");
  });
})


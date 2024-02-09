const bodyParser = require("body-parser");
const express = require("express");
const app = express();

const datiRoutes = require("./controllers/dati.controller.js")

const connectDb = require("./db.js")

//middleware
app.use(bodyParser.json())
app.use('/api/dati', datiRoutes)
connectDb()
.then(() => {
    console.log("db connection successful");
    app.listen(3001, () => console.log("server started at 3001"))
})
.catch(err => console.log(err))

const path = require("path");
require("dotenv").config({path: "../.env"})

/* ==== External Modules ==== */
const express = require("express");
const cors = require("cors")

/* ==== Internal Modules ==== */


/* ==== Instanced Modules  ==== */
const app = express();
const routes = require("./routes")


/* ==== Configuration ==== */
const config = require("@sapling/config")

// connect to the MongoDB
require("./config/database");

/* ==== Middleware ==== */
app.use(cors())
app.use(express.static(path.join("build")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* ====  Routes & Controllers  ==== */
app.use("/api", routes)

app.all("/api/*", (req, res, next) =>{
	res.send("THESE ARE NOT THE APIS YOU ARE LOOKING FOR")
})

/* ====  Server Listener  ==== */
app.listen(config.PORT, () => {
	console.log(`Sapling is live at http://localhost${config.PORT}`);
});

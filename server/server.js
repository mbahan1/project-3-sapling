require("dotenv").config({path: "../.env"})

/* ==== External Modules ==== */
const express = require("express");


/* ==== Internal Modules ==== */


/* ==== Instanced Modules  ==== */
const app = express();


/* ==== Configuration ==== */
const config = require("@sapling/config")

/* ==== Middleware ==== */


/* ====  Routes & Controllers  ==== */


/* ====  Server Listener  ==== */
app.listen(config.PORT, () => {
	console.log(`Sapling is live at http://localhost${config.PORT}`);
});

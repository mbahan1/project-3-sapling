const path = require("path");
require("dotenv").config({path: "../.env"});

/* ==== External Modules ==== */
const express = require("express");
//Required for method override
const cors = require("cors");


/* ==== Internal Modules ==== */


/* ==== Instanced Modules  ==== */
const app = express();


/* ==== Configuration ==== */
const config = require("@sapling/config")

// connect to the MongoDB
require("./config/database");

/* ==== Middleware ==== */
app.use(cors());
app.use(express.static(path.join("build")));

//Required for parsing JSON
app.use(express.json());

/* ====  Routes & Controllers  ==== */


/* ====  Server Listener  ==== */
app.listen(config.PORT, () => {
	console.log(`Sapling is live at http://localhost${config.PORT}`);
});

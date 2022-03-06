const path = require("path");
require("dotenv").config({path: "../.env"});

/* ==== External Modules ==== */
const express = require("express");
//Required for method override
const cors = require("cors");


/* ==== Internal Modules ==== */


/* ==== Instanced Modules  ==== */
const app = express();
const routes = require("./routes")


/* ==== Configuration ==== */
const config = require("@sapling/config")

// connect to the MongoDB
require("./config/database");

/* ==== Middleware ==== */
app.use(cors());
app.use(express.static(path.join("build")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* ====  Routes & Controllers  ==== */
app.use("/api", routes)

app.all("/api/*", (req, res, next) =>{
	res.send("THESE ARE NOT THE APIS YOU ARE LOOKING FOR")
})

app.use((req, res, next) => {
	res.sendFile(path.join(__dirname, "build", "index.html"));
});

/* ====  Server Listener  ==== */
app.listen(config.PORT, () => {
	console.log(`Sapling is live at http://localhost${config.PORT}`);
});

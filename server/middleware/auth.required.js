const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
    try {

        const bearerHeader = req.headers.authorization;

        if (typeof bearerHeader === "undefined") {
            return res.sendStatus(403);
        }

        const token = bearerHeader.split(" ")[1];
        const payload = await jwt.verify(token, "manifestyourdreams");
        console.log(payload, "this is awesome");
        req.userId = payload._id

        next();
    }

    catch (error) {
        console.log(error);
        return res
            .status(500).json({
                status: 500, message: "internal server error"
            })

    }
}
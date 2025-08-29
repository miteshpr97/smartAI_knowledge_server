//middleware/errorHndler.js

import logger from "../config/logger"

const errorHandler = async (err, req, res, next) => {
    logger.error("❌ An error occurred:", err.message);
    res.status(err.statusCode || 500).json({ message: "Internal Server Error" || err.message });
}


export default errorHandler;
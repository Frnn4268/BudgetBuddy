const logger = require('../config/logger');

const errorHandler = (err, req, res, next) => {
  logger.error(err.message);
  res.status(500).json({ message: 'Server Error' });
};

module.exports = errorHandler;
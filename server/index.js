const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');

const logger = require('./config/logger');
const helmet = require('./middlewares/helmet');
const rateLimiter = require('./middlewares/rateLimiter');
const compression = require('./middlewares/compression');
const errorHandler = require('./middlewares/errorHandler');
const mongoSanitize = require('./middlewares/mongoSanitize');
const xssClean = require('./middlewares/xssClean');
const swagger = require('./middlewares/swagger');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(helmet);
app.use(rateLimiter);
app.use(compression);
app.use(mongoSanitize);
app.use(xssClean);

app.use(morgan('combined', { stream: { write: message => logger.info(message.trim()) } }));

connectDB();

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/transactions', require('./routes/transactionRoutes'));

swagger(app);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

try {
  app.listen(PORT, () => logger.info(`Server running on port ${PORT}`));
} catch (error) {
  logger.error(`Error initializing server: ${error.message}`);
  process.exit(1);
}

process.on('uncaughtException', (error) => {
  logger.error(`Uncaught Exception: ${error.message}`);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  logger.error(`Unhandled Rejection at: ${promise}, reason: ${reason}`);
  process.exit(1);
});

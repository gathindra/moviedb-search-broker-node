import app from './app';
import * as http from 'http';
import logger from './config/winston';

const PORT = 5000;

http.createServer(app)
    .listen(PORT, () => {
        logger.info(`App started @ http://localhost:${PORT}`);
    });

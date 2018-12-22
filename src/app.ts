import * as bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import { Routes } from './routes/appRoutes';
import morgan from 'morgan';
import logger from './config/winston';

class App {

    public appServer: express.Application;
    public routePrv: Routes = new Routes();

    constructor() {
        this.appServer = express();
        this.initServer();
        logger.info('After service configuration');
        this.routePrv.routes(this.appServer);
    }

    private initServer(): void {
        this.appServer.use(morgan('combined', { stream: {
            write: (data: any) => {
                logger.debug(data);
            },
        }}));

        this.appServer.use(cors());
        this.appServer.use(bodyParser.json());
        this.appServer.use(bodyParser.urlencoded({ extended: true }));
    }
}

export default new App().appServer;

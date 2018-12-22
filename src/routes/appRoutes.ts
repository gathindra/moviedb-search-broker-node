import { MovieController } from './../controllers/movieController';
import * as express from 'express';
import { Request, Response, NextFunction } from 'express';

export class Routes {
    public movieCtrler: MovieController = new MovieController();

    public routes(app: express.Application): void {
        app.route('/api/v1/movies')
            .get(async (req: Request, res: Response, next: NextFunction) => {
                console.log('Invoking movie controller');
                await next();
            }, this.movieCtrler.searcMovies);
    }
}

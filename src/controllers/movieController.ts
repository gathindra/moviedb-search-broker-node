import { FluentDataHelper } from './../utils/fluentDataHelper';
import { ClientProvider } from './../utils/communication/clientProvider';
import { MovieResponse } from './../models/movie';
import { Request, Response } from 'express';
import logger from '../config/winston';

export class MovieController {

    public async searcMovies(req: Request, res: Response) {
        logger.info(`@Movie controller. Query: ${req.query.query} and page # ${req.query.page}`);
        let movieResults: MovieResponse;

        try {
            // Get the movies matching the query and the page index
            movieResults = await ClientProvider
                            .getInstance()
                            .client
                            .getMovies(req.query.query, req.query.page);
            if (movieResults && movieResults.results) {
                // Sort the results in ascending order and
                // construct the image URLs
                movieResults = new FluentDataHelper()
                                    .initData(movieResults)
                                    .sortAscending()
                                    .updateImageUrl()
                                    .build();
            }
        } catch (error) {
            logger.error(`@Movie controller. error ${error}`);
            movieResults = {} as MovieResponse;
        }

        res.status(200)
                .json(movieResults);

    }
}

import { Result } from './../models/result';
import { MovieResponse } from './../models/movie';

export class DataHelper {

    public static sortAscending(results: Result[]): Result[] {
        return results.sort((m1: Result, m2: Result) => {
            return m1.title < m2.title
                ? -1 : m1.title > m2.title
                ? 1 : 0;
        });
    }

    public static updateMoviePosterUrl(results: Result[]): Result[] {
        const imageHostPart = 'https://image.tmdb.org/t/p/w185/';
        results.map((movie: Result) => {
            if (movie.poster_path) {
                movie.poster_path = `${imageHostPart}${movie.poster_path}`;
            }
        });

        return results;
    }

}

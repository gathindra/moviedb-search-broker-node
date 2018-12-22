import { DataHelper } from './dataHelper';
import { MovieResponse } from './../models/movie';

export class FluentDataHelper {
    private movieResponse: MovieResponse;

    public initData(response: MovieResponse)
    : FluentDataHelper {
        this.movieResponse = response;
        return this;
    }

    public sortAscending(): FluentDataHelper {
        this.movieResponse.results = 
        DataHelper.sortAscending(this.movieResponse.results);
        return this;
    }

    public updateImageUrl(): FluentDataHelper {
        this.movieResponse.results =
        DataHelper.updateMoviePosterUrl(this.movieResponse.results);
        return this;
    }

    public build(): MovieResponse {
        return this.movieResponse;
    }
}
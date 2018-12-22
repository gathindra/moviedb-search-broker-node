import { Response } from 'express';
import axios, { AxiosPromise } from 'axios';
import { MovieResponse } from '../../models/movie';

export class ServiceClient {

    private restEndpoint: string;
    private apiKey: string;

    constructor(endpoint: string, apiKey: string) {
        console.log(`@ Constructor endpoint ${endpoint} api Key ${apiKey}`)
        this.restEndpoint = endpoint;
        this.apiKey = apiKey;
    }

    public getMovies(query: string, page: number): Promise<MovieResponse> {
        const endpointQuery = `${this.restEndpoint}/3/search/movie?query=${query}&page=${page}&api_key=${this.apiKey}`;
        console.log(`@ getMovies query: ${query} page: ${page} endpoint: ${endpointQuery}`);
        return new Promise((resolve, reject) => {
            axios.get<MovieResponse>(endpointQuery)
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });

    }

}

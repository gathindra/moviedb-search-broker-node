"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class ServiceClient {
    constructor(endpoint, apiKey) {
        console.log(`@ Constructor endpoint ${endpoint} api Key ${apiKey}`);
        this.restEndpoint = endpoint;
        this.apiKey = apiKey;
    }
    getMovies(query, page) {
        const endpointQuery = `${this.restEndpoint}/3/search/movie?query=${query}&page=${page}&api_key=${this.apiKey}`;
        console.log(`@ getMovies query: ${query} page: ${page} endpoint: ${endpointQuery}`);
        return new Promise((resolve, reject) => {
            axios_1.default.get(endpointQuery)
                .then((response) => {
                resolve(response.data);
            })
                .catch((error) => {
                reject(error);
            });
        });
    }
}
exports.ServiceClient = ServiceClient;
//# sourceMappingURL=serviceClient.js.map
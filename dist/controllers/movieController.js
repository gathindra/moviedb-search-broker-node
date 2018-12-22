"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fluentDataHelper_1 = require("./../utils/fluentDataHelper");
const clientProvider_1 = require("./../utils/communication/clientProvider");
const winston_1 = __importDefault(require("../config/winston"));
class MovieController {
    searcMovies(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            winston_1.default.info(`@Movie controller. Query: ${req.query.query} and page # ${req.query.page}`);
            let movieResults;
            try {
                // Get the movies matching the query and the page index
                movieResults = yield clientProvider_1.ClientProvider
                    .getInstance()
                    .client
                    .getMovies(req.query.query, req.query.page);
                if (movieResults && movieResults.results) {
                    // Sort the results in ascending order and
                    // construct the image URLs
                    movieResults = new fluentDataHelper_1.FluentDataHelper()
                        .initData(movieResults)
                        .sortAscending()
                        .updateImageUrl()
                        .build();
                }
            }
            catch (error) {
                winston_1.default.error(`@Movie controller. error ${error}`);
                movieResults = {};
            }
            res.status(200)
                .json(movieResults);
        });
    }
}
exports.MovieController = MovieController;
//# sourceMappingURL=movieController.js.map
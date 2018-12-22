"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DataHelper {
    static sortAscending(results) {
        return results.sort((m1, m2) => {
            return m1.title < m2.title
                ? -1 : m1.title > m2.title
                ? 1 : 0;
        });
    }
    static updateMoviePosterUrl(results) {
        const imageHostPart = 'https://image.tmdb.org/t/p/w185/';
        results.map((movie) => {
            if (movie.poster_path) {
                movie.poster_path = `${imageHostPart}${movie.poster_path}`;
            }
        });
        return results;
    }
}
exports.DataHelper = DataHelper;
//# sourceMappingURL=dataHelper.js.map
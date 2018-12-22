"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataHelper_1 = require("./dataHelper");
class FluentDataHelper {
    initData(response) {
        this.movieResponse = response;
        return this;
    }
    sortAscending() {
        this.movieResponse.results =
            dataHelper_1.DataHelper.sortAscending(this.movieResponse.results);
        return this;
    }
    updateImageUrl() {
        this.movieResponse.results =
            dataHelper_1.DataHelper.updateMoviePosterUrl(this.movieResponse.results);
        return this;
    }
    build() {
        return this.movieResponse;
    }
}
exports.FluentDataHelper = FluentDataHelper;
//# sourceMappingURL=fluentDataHelper.js.map
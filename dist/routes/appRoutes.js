"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const movieController_1 = require("./../controllers/movieController");
class Routes {
    constructor() {
        this.movieCtrler = new movieController_1.MovieController();
    }
    routes(app) {
        app.route('/api/v1/movies')
            .get((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            console.log('Invoking movie controller');
            yield next();
        }), this.movieCtrler.searcMovies);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=appRoutes.js.map
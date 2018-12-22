"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = __importStar(require("body-parser"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const appRoutes_1 = require("./routes/appRoutes");
const morgan_1 = __importDefault(require("morgan"));
const winston_1 = __importDefault(require("./config/winston"));
class App {
    constructor() {
        this.routePrv = new appRoutes_1.Routes();
        this.appServer = express_1.default();
        this.initServer();
        winston_1.default.info('After service configuration');
        this.routePrv.routes(this.appServer);
    }
    initServer() {
        this.appServer.use(morgan_1.default('combined', { stream: {
                write: (data) => {
                    winston_1.default.debug(data);
                },
            } }));
        this.appServer.use(cors_1.default());
        this.appServer.use(bodyParser.json());
        this.appServer.use(bodyParser.urlencoded({ extended: true }));
    }
}
exports.default = new App().appServer;
//# sourceMappingURL=app.js.map
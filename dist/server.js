"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const http = __importStar(require("http"));
const winston_1 = __importDefault(require("./config/winston"));
const PORT = 5000;
http.createServer(app_1.default)
    .listen(PORT, () => {
    winston_1.default.info(`App started @ http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map
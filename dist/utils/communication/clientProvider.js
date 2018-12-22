"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const serviceClient_1 = require("./serviceClient");
class ClientProvider {
    static getInstance() {
        if (!ClientProvider.instance) {
            ClientProvider.instance = new ClientProvider();
        }
        return ClientProvider.instance;
    }
    constructor() {
        this.client = new serviceClient_1.ServiceClient('http://api.themoviedb.org', '67310a2e47a53e09a0f64319b59d3a70');
        console.log('Initializing client provider');
    }
}
exports.ClientProvider = ClientProvider;
//# sourceMappingURL=clientProvider.js.map
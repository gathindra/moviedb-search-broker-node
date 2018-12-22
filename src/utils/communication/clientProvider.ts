import { ServiceClient } from './serviceClient';

export class ClientProvider {

    public static getInstance() {
        if (!ClientProvider.instance) {
            ClientProvider.instance = new ClientProvider();
        }
        return ClientProvider.instance;
    }

    private static instance: ClientProvider;

    public client: ServiceClient;

    constructor() {
        this.client = new ServiceClient('http://api.themoviedb.org',
                                        '67310a2e47a53e09a0f64319b59d3a70');
        console.log('Initializing client provider');

    }
}

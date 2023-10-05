import express from 'express';

class Server {
    private static readonly PORT = 4000;

    private readonly app = express();

    constructor() {
        this.configureRoutes();
    }

    private configureRoutes() {
        this.app.get('/items/:id', (req, res) => {
            res.contentType('text/json')
            res.send(`{"Hello": "World! ${req.params.id}"}`);
        });
    }

    start(port = Server.PORT) {
        this.app.listen(port, () => {
            return console.log(`Express is listening at http://localhost:${port}`);
        });

        return this.app;
    }
}

export const app = new Server().start();

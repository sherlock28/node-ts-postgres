import express from 'express';
import routes from '../routes/index.routes';
import cors from 'cors';

export const configure = () => {
    const app = express();

    app.set('port', process.env.PORT || 4000);
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }))

    app.use('/api', routes);

    return app;
}

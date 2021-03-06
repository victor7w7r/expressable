import express, { Express, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { router } from './routes/actions';

dotenv.config();

const app: Express = express();
const port: string = process.env.PORT || "4000";

app.use(cors());
app.use(express.json());

app.use('/actions', router);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({msg: '404 not found'})
});

app.listen((port as string), () => console.log('Server running at', port));
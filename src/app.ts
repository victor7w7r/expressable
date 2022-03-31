import express, { Express, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { router } from './routes/actions';

dotenv.config();

const app: Express = express();
const port: string = process.env.PORT || "4000";

app.use(cors());
app.use(express.json());

app.use('/actions', router);
app.use((res: Response) => res.status(404).json({msg: '404 not found'}));

app.listen((port as string), () => console.log('Server running at', port));
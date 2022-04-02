import express, { Express, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app: Express = express();
const port: string = process.env.PORT || "4000";

app.use(cors());
app.use(express.json());

// TODO: Routing, Middlewares, Apis...

app.listen((port as string), () => console.log('Server running at', port));
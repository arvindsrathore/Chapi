import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';

export const app = express();

dotenv.config({ path: "./config.env" });

let corsOptions = {
    origin : ['http://localhost:3000'],
}
// app.use(cors(corsOptions));
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

import {router as userRouter} from './routes/userRouter.js';
import {router as financeRouter} from './routes/financeRouter.js'

app.use('/api/users',userRouter);
app.use('/api/finance',financeRouter);
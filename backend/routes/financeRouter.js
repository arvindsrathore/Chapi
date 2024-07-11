import express from 'express';
import * as financecontroller from '../controllers/financecontroller.js';

export const router = express.Router();

router.post('/addexpense',financecontroller.addexpense);
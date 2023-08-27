import express from 'express';
const router = express.Router();


import newsRouter from './routes/news.mjs'

router.use( newsRouter)

export default router;
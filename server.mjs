import express from 'express';
import cors from 'cors';
import path from 'path';
import axios from 'axios';
import apiv1router from './apiv1/main.mjs'
const __dirname = path.resolve();
const app = express()
app.use(cors())

app.use('/', express.static(path.join(__dirname, 'public')))
app.use("/v1", apiv1router)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
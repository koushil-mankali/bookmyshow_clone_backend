import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import home from './routes/home.route'

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use("/", home)

app.use((req, res)=>{
    return res.status(404).send("Page Not Found!");
})

app.listen(3001);
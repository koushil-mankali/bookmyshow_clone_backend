import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import home from './routes/home.route'
import ticketBooking from './routes/ticketBooking.route'

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use("/", home)
app.use("/ticket-booking", ticketBooking)

app.use((req, res)=>{
    return res.status(404).send("Page Not Found!");
})

app.listen(3001);
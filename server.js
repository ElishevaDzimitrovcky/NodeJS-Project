import { configDotenv } from 'dotenv';
import express from 'express';
import HelpRequestRouter from './routers/HelpRequestRouter.js';
import VolunteerRouter from './routers/VolunteerRouter.js';

configDotenv();
const app = express();
const hostName = process.env.HOST_NAME;
const port = process.env.PORT;

app.use(express.json());
app.use('/helpRequests', HelpRequestRouter);
app.use('/volunteers', VolunteerRouter);
app.use('/', (req, res) => {
    res.send('welcome to our api');
})

app.listen(port, hostName, () => {
    console.log(`Server is running on http://${hostName}:${port}`);
});
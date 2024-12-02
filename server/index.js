import express from 'express'
import "dotenv/config";
import {db} from "./config/db.js"

const app = express();
const PORT = process.env.PORT || 8000;
app.use(express.json());


app.use("*", (req, res) => {
    res.status(404).json({
        message: "not found"
    })
})

app.use('*', (req, res) => {
    res.status(404).json({message: "not found"})
});

import userRoutes from './routes/user.route.js';
app.use('/api/v1/users', userRoutes);


app.listen(PORT, () => {
    console.log("server strated, list on port ${PORT}");
});

import { errorHandler } from './middleware.js';

//...
app.use('*', (req, res) => {
    res.status(404).json({message: "not found"});
});

app.use(errorHandler);

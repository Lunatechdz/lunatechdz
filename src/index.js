import express from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';

import devRoute from './routes/dev.route.js';
import userRouter from './routes/user.route.js';
import noteRouter from './routes/note.route.js';
const app = express();
const port = process.env.PORT;
const dbUri = process.env.DB_URI;

app.use(express.json())

app.use('/status', devRoute);
app.use('/user', userRouter);
app.use('/note' , noteRouter )

app.listen(port, async()=>{
    console.log(`server listen on port ${port}`)
    console.log("attemting database connection" );
    await  mongoose.connect(dbUri)
    console.log("DataBase Connected successfull");
})

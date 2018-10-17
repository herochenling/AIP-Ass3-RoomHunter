import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import config from './config/db';
import userRouter from './routes/users-route';
import postRouter from './routes/posts-route';
import passport from 'passport';
import readToken from './config/passport';
import path from 'path';

const app = express();

//middlewares
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));
readToken(passport);

// database configuration
mongoose.connect(
    config.database,
    { useNewUrlParser: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    // check if database is connected
    console.log('MongoDB database connection established successfully');
});

//routes
app.use('/posts', postRouter);
app.use('/users', userRouter);

// check if server is running
app.listen(4000, () => console.log('Express server running on port 4000...'));

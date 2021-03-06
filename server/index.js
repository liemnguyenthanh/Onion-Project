
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import buyRoutes from './routes/buyRoute.js';
import buyDetailRoutes from './routes/buyDetailRoute.js';
import userRoutes from './routes/userRoute.js';
const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/buy', buyRoutes);
app.use('/buyDetail', buyDetailRoutes);
app.use('/users', userRoutes);

const CONNECTION_URL = 'mongodb+srv://dbshop:p8LJ9t4d2RRIaNvT@cluster0.78vh7.mongodb.net/onion?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);
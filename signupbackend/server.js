
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
//import router with the routes
import routeUrls from './routes/routes.js';

dotenv.config();

//initialise app as express and use its instances
const app = express();
dotenv.config();
//Port number
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());



const uri = process.env.DATABASE_KEY;

//connection to database
mongoose.connect(uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },)

 const connection = mongoose.connection;
 connection.once('open', () => { 
    console.log("Database connected to Mongodb");
});


//using express middleware for setting every route to start from posts
app.use('/app', routeUrls);


app.listen(port, () => console.log(`Server running on port:  ${port}`));


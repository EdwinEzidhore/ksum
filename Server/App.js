import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config({ path: "./config/.env" });
import UserRounter from './routes/UserRoute.js';


const app = express();
app.use(express.json());



console.log(process.env.LOCAL_FRONTEND_URL);

app.use(cors()); 


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use("/api/users", UserRounter ); 

export default app;
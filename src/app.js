import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
const app = express();

//config
app.set('port',process.env.PORT || 3000);


//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());


//routes 
app.use('/api/v1/users',require('./routes/users'));


export default app;

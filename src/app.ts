require('dotenv').config();
import 'module-alias/register';
import 'source-map-support/register';
import express from 'express';
import mongoose from './services/mongoose';
import { v1 } from './routes';
import morgan from 'morgan'

const port = process.env.APP_PORT || 3000;
const mongoDB = process.env.APP_MONGODB_URI;
const app = express();

// permite usar json en las peticiones
app.use(express.json());

// se añade un middleware para que express reconosca los datos enviados por post
app.use(express.urlencoded({extended:true}))

// morgan es para que la consola informe sobre las acciones del servidor 
app.use(morgan("dev"))

// cargamos las rutas
app.use('/v1', v1);

//Set up default mongoose connection
mongoose.connect(mongoDB, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
}).catch(error => {
	console.log("error the connections => \n", error);
});
    
app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});

require('dotenv').config();
import express from 'express';
import mongoose from './services/mongoose';
import { v1 } from './routes';

const port = process.env.APP_PORT || 3000;
const mongoDB = process.env.APP_MONGODB_URI;
const app = express();

// permite usar json en las peticiones
app.use(express.json());

// cargamos las rutas
app.use('/v1', v1);

//Set up default mongoose connection
mongoose.connect(mongoDB, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
}).catch(error => {
	console.log(error);
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});

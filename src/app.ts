require('dotenv').config();
import express from 'express';

const app = express();
const port = process.env.APP_PORT || 3000;
app.get('/', (req, res) => {
	res.send('The sedulous hyena ate the antelope!');
});
app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
});

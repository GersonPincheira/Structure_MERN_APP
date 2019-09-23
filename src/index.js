import dotenv from 'dotenv';
dotenv.config();
import app from './app';
require('./database');

app.listen(app.get('port'),()=> {
	console.log('server on port' + app.get('port') )
});
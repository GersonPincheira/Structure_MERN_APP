import mongoose from 'mongoose';

const URI = process.env.MONGODB_URI 
					? process.env.MONGODB_URI 
					: 'mongodb://localhost/data_base_dev';

mongoose.connect(URI,{
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.once('open', () => {
	console.log('db is connected');
});
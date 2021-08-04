import mongoose from 'mongoose';

const { Schema } = mongoose;

const TodoModel = new Schema({
	title: String,
	description:{
		type:String,
		default:"not Description"
	}, 
	initTime:Date,
	lastTime:Date
});

export default mongoose.model('Todos', TodoModel);

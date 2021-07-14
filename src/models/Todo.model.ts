import mongoose from 'mongoose';

const { Schema } = mongoose;

const TodoModel = new Schema({
	title: String,
});

export default mongoose.model('Todos', TodoModel);

//Import the mongoose module
import mongoose from 'mongoose';

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;

export default mongoose;

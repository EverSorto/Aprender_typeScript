import { Router } from 'express';
import { createTodo, getAllTodos } from './todo.controller';
 
const router = Router();

// get and post function https://expressjs.com/es/4x/api.html#router.route
router.route('/')
	.get(getAllTodos)
	.post(createTodo);

export default router;

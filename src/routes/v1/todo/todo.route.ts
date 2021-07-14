import { Router } from 'express';
import { createTodo, getAllTodos } from './todo.controller';

const router = Router();

// get and post function
router.route('/')
	.get(getAllTodos)
	.post(createTodo);

export default router;

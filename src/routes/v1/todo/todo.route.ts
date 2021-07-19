import { Router } from 'express';
import { createTodo, getAllTodos, todoDeleteOne, modifyTodo } from './todo.controller';

const router = Router();

// get and post function https://expressjs.com/es/4x/api.html#router.route
router.route('/')
	.get(getAllTodos)
	.post(createTodo)
	.delete(todoDeleteOne)
	.put(modifyTodo)
export default router;

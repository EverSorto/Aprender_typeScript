import { Router } from 'express';
import { createTodo, getAllTodos, deleteOneTodo, todoUpdateOne } from './todo.controller';

const router = Router();

// get and post function https://expressjs.com/es/4x/api.html#router.route
router.route('/:id/:title?/:description?/:initTime?/:lastTime?')
	.put(todoUpdateOne)
	.delete(deleteOneTodo)

router.route('/')
	.get(getAllTodos)
	.post(createTodo)
export default router
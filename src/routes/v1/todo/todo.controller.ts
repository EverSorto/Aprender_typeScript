import { verifyTodoFields } from 'utils/verifyTodoFields';
import TodoModel from 'models/Todo.model';

export const getAllTodos = async (req, res) => {
	try {
		const todos = await TodoModel.find({});
		return res.status(200).json(todos);
	} catch (e) {
		console.log(e);
		return res.status(500).json({
			message: 'Unknow error',
		});
	}
};

export const createTodo = async (req, res) => {
	const { body } = req;
	const { isValid, message } = verifyTodoFields(body);

	// verificamos el body tenga datos correctos
	if (!isValid) {
		return res.status(422).json({
			message,
		});
	}

	const todo = new TodoModel(body);
	return todo.save(function(err, document) {
		if (err) {
			return res.status(500).json({
				message: err?.message,
				error: err,
			});
		}
		// saved!
		return res.status(201).json(document);
	});
};

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
	return todo.save(function (err, document) {
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

// inicio con el delete 
/**
 * mongoose deleteOne
 * @see https://mongoosejs.com/docs/api.html#query_Query-deleteOne 
 * uso de comodines como paramtros 
 * @see http://expressjs.com/es/api.html#res.app
 */

export const todoDeleteOne = async (req, res) => {
	const { id } = req.body;
	try {
		const resultado = await TodoModel.deleteOne({ _id: id })
		res.status(200).json({
			resultado
		})
	} catch (error) {
		res.status(500).json({
			message: "todo not exits",
			error
		})
	}
}


export const modifyTodo = async (req, res) => {
	const { body} = req;
	const {id} = body
	const { isValid, message } = verifyTodoFields(body);

	// se verifica nuevamente que los campos estan correctos 
	if (!isValid) {
		return res.status(422).json({
			message,
		});
	}

	try {
		const modify = await TodoModel.updateOne({_id:id},body);
		const buscar = await TodoModel.find({_id: id})
		res.status(200).json({buscar})
	} catch (error) {
		res.status(500).json({
			message:"Error al modificar la tarea",
			error,
		})
	}
}
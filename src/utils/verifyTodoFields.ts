interface ITodo {
	title?: string;
}

export const verifyTodoFields = (body: ITodo) => {
	if (!body) {
		return {
			isValid: false,
			message: 'Por favor ingrese los datos correctamente',
		};
	}
	if (!body?.title) {
		return {
			isValid: false,
			message: 'Title es un campo obligatorio',
		};
	}
	return {
		isValid: true,
		message: null,
	};
};

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const ADD = 'ADD'
export const SUBTRACT = 'SUBTRACT'
export const STORE_RESULT = 'STORE_RESULT'
export const DELETE_RESULT = 'DELETE_RESULT'

export const increment = () => {
	return {
		type: INCREMENT
	};
};
export const decrement = () => {
	return {
		type: DECREMENT
	};
};
export const add = value => {
	return {
		type: ADD,
		value
	};
};

export const subtract = value => {
	return {
		type: SUBTRACT,
		value
	};
};

export const store_result = result => {
	return {
		type: STORE_RESULT,
		result
	};
};

export const delete_result = id => {
	return {
		type: DELETE_RESULT,
		id
	};
};
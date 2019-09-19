import * as actionTypes from '../actions'

const initialState = {
	results: []
}
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.STORE_RESULT:
			return { ...state, results: state.results.concat({id: new Date(), value: action.result})};
		case actionTypes.DELETE_RESULT:
			let newResults = state.results.filter(idx => idx.id !== action.id)
			return {...state, results: newResults};
		default:
			return state;
	}
}

export default reducer;
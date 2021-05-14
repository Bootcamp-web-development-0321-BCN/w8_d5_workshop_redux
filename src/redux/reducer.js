import initialState from "./initialState";

function reducer(state = initialState, action) {
	switch (action.type) {
		case "INCREMENT":
			return {
				...state,
				count: state.count + action.value
			};
		case "DECREMENT":
			return {
				...state,
				count: state.count - action.value
			};
		case "INCREMENT_HOOKS":
			return {
				...state,
				countHooks: state.countHooks + 1
			};
		case "DECREMENT_HOOKS":
			return {
				...state,
				countHooks: state.countHooks - 1
			};
		default:
			return state;
	}
}

export default reducer;

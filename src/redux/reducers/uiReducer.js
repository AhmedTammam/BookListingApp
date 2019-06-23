import { EDIT_MODE } from '../actionTypes';

const initialState = {
	isEditing: false
};

export default (state = initialState, action) => {
	const { isEditing } = state;
	switch (action.type) {
		case EDIT_MODE:
			return { ...state, isEditing: !isEditing };
		default:
			return state;
	}
};

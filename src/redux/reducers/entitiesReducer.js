import {
	FETCH_DATA,
	EDIT_BOOK,
	ADD_BOOK,
	ADD_AUTHOR,
	EDIT_AUTHOR,
	ADD_CATEGORY,
	EDIT_CATEGORY
} from '../actionTypes';

const initialState = {
	books: {},
	authors: {},
	categories: {}
};

const entitiesReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_DATA:
			return { ...state, ...action.payload };
		case ADD_BOOK:
			return {
				...state,
				books: {
					...state.books,
					...action.payload
				}
			};

		case EDIT_BOOK:
			return {
				...state,
				books: {
					...state.books,
					...action.payload
				}
			};

		case ADD_AUTHOR:
			return {
				...state,
				authors: {
					...state.authors,
					...action.payload
				}
			};
		case EDIT_AUTHOR:
			return {
				...state,
				authors: {
					...state.authors,
					...action.payload
				}
			};
		case ADD_CATEGORY:
			return {
				...state,
				categories: {
					...state.categories,
					...action.payload
				}
			};
		case EDIT_CATEGORY:
			return {
				...state,
				categories: {
					...state.categories,
					...action.payload
				}
			};

		default:
			return state;
	}
};

export default entitiesReducer;

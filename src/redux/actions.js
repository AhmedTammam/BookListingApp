import {
	EDIT_MODE,
	FETCH_DATA,
	EDIT_BOOK,
	ADD_BOOK,
	ADD_AUTHOR,
	EDIT_AUTHOR,
	ADD_CATEGORY,
	EDIT_CATEGORY
} from './actionTypes';

// UI Acion
export function editMode() {
	return {
		type: EDIT_MODE
	};
}

// State Action
export function fetchData(payload) {
	return {
		type: FETCH_DATA,
		payload
	};
}

//Forms Actions

// Book Forms

export function addBook(book) {
	return {
		type: ADD_BOOK,
		payload: book
	};
}

export function editBook(book) {
	return {
		type: EDIT_BOOK,
		payload: book
	};
}

// Auther Forms

export function addAuthor(author) {
	return {
		type: ADD_AUTHOR,
		payload: author
	};
}

export function editAuthor(author) {
	return {
		type: EDIT_AUTHOR,
		payload: author
	};
}

// Category Forms

export function addCategory(category) {
	return {
		type: ADD_CATEGORY,
		payload: category
	};
}

export function editCategory(category) {
	return {
		type: EDIT_CATEGORY,
		payload: category
	};
}

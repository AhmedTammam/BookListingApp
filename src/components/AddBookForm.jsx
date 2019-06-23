import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import uuid from 'uuid';

import { addBook } from '../redux/actions';
import history from '../history';

function AddBookForm({ categories, authors, addNewBook }) {
	const [ values, setValues ] = useState({
		title: '',
		id: uuid(),
		description: '',
		author: '',
		isbn: '',
		publishYear: '',
		pagesNumber: '',
		image: '',
		category: ''
	});

	const {
		title,
		id,
		description,
		author,
		isbn,
		publishYear,
		pagesNumber,
		image,
		category
	} = values;

	const renderAuthors = () => {
		const allAuthors = Object.keys(authors).map((key) => (
			<option key={key} value={key}>
				{authors[key].name}
			</option>
		));
		return (
			<select
				id="category"
				className="form-control"
				name="author"
				defaultValue={author}
				onChange={selectChange}
			>
				<option>Choose...</option>
				{allAuthors}
			</select>
		);
	};

	const renderCategories = () => {
		const allCategories = Object.keys(categories).map((key) => (
			<option key={key} value={key}>
				{categories[key].name}
			</option>
		));
		if (Object.keys(categories).length > 0) {
			return (
				<select
					id="category"
					className="form-control"
					name="category"
					defaultValue={category}
					onChange={selectChange}
				>
					<option>Choose ..</option>
					{allCategories}
				</select>
			);
		}
	};

	const inputChange = (e) => {
		const { name, value } = e.target;
		setValues({ ...values, ...{ [name]: value } });
	};

	const selectChange = (e) => {
		const { name, value } = e.target;
		setValues({ ...values, ...{ [name]: value } });
	};
	const validate = () => {
		if (
			title &&
			id &&
			description &&
			author &&
			isbn &&
			publishYear &&
			pagesNumber &&
			image &&
			category
		) {
			return true;
		}

		return false;
	};

	const submit = (e) => {
		e.preventDefault();
		if (validate()) {
			addNewBook({ [id]: values });
			history.push(`/`);
		} else {
			alert('empty form all fields required');
		}
	};

	return (
		<div className="col-md-9">
			<h3>Add New Book</h3>
			<form className="mt-3" onSubmit={submit}>
				<div className="form-group">
					<label htmlFor="Title">Title</label>
					<input
						type="text"
						className="form-control"
						id="Title"
						name="title"
						value={title}
						onChange={inputChange}
					/>
				</div>
				<div className="row form-group">
					<div className="col">
						<label htmlFor="category">Category</label>
						{renderCategories()}
					</div>
					<div className="col">
						<label htmlFor="auther">Auther</label>
						{renderAuthors()}
					</div>
				</div>

				<div className="form-group">
					<label htmlFor="description">Description</label>
					<textarea
						className="form-control"
						id="description"
						rows="6"
						name="description"
						value={description}
						onChange={inputChange}
					/>
				</div>

				<div className="form-group">
					<label htmlFor="isbn">ISBN</label>
					<input
						type="text"
						className="form-control"
						id="isbn"
						name="isbn"
						onChange={inputChange}
						value={isbn}
					/>
				</div>

				<div className="row form-group">
					<div className="col">
						<label htmlFor="Pages">No. of pages</label>
						<input
							type="number"
							className="form-control"
							id="Pages"
							name="pagesNumber"
							onChange={inputChange}
							value={pagesNumber}
						/>
					</div>
					<div className="col">
						<label htmlFor="Year">Year Published</label>
						<input
							type="text"
							className="form-control"
							id="Year"
							name="publishYear"
							onChange={inputChange}
							value={publishYear}
						/>
					</div>
				</div>

				<div className="form-group">
					<label htmlFor="img">Image URL</label>
					<input
						type="text"
						className="form-control"
						id="img"
						name="image"
						onChange={inputChange}
						value={image}
					/>
				</div>

				<button type="submit" className="btn btn-primary mr-2">
					Save
				</button>
				<Link to="/" className="btn btn-outline-dark">
					Cancel
				</Link>
			</form>
		</div>
	);
}

const mapStateToProps = ({ entitiesReducer }) => {
	return {
		authors: entitiesReducer.authors,
		categories: entitiesReducer.categories
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addNewBook: (book) => dispatch(addBook(book))
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(AddBookForm);

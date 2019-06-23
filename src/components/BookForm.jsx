import React, { useState } from 'react';
import { connect } from 'react-redux';

import { editBook } from '../redux/actions';
import history from '../history';

function BookForm({ name, book = {}, authors, categories, editBook }) {
	const [ values, setValues ] = useState({ ...book });

	const { title, description, pagesNumber, publishYear, isbn, image, id } = values;

	const renderAuthors = () => {
		const allAuthors = Object.keys(authors).map((key) => (
			<option key={key} value={key}>
				{authors[key].name}
			</option>
		));
		if (Object.keys(authors).length > 0) {
			const autherKey = Object.keys(authors).find((key) => key === book.author);
			const author = authors[autherKey].name;
			return (
				<select
					id="category"
					className="form-control"
					defaultValue={author}
					name="author"
					onChange={selectChange}
				>
					{allAuthors}
				</select>
			);
		}
	};

	const renderCategories = () => {
		const allCategories = Object.keys(categories).map((key) => (
			<option key={key} value={key}>
				{categories[key].name}
			</option>
		));
		if (Object.keys(categories).length > 0) {
			const categoryKey = Object.keys(categories).find(
				(key) => key === book.category
			);
			const category = categories[categoryKey].name;
			return (
				<select
					id="category"
					className="form-control"
					defaultValue={category}
					name="category"
					onChange={selectChange}
				>
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

	const submit = (e) => {
		e.preventDefault();
		editBook({ [id]: values });
		history.push(`/bookdetails/${id}`);
	};

	return (
		<div className="col-md-9">
			<h3>{name}</h3>
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
				<button
					className="btn btn-outline-dark"
					onClick={() => history.push(`/bookdetails/${id}`)}
				>
					Cancel
				</button>
			</form>
		</div>
	);
}

const mapStateToProps = ({ entitiesReducer }, currnetProps) => {
	const id = currnetProps.match.params.id;
	return {
		book: entitiesReducer.books[id],
		authors: entitiesReducer.authors,
		categories: entitiesReducer.categories
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		editBook: (book) => dispatch(editBook(book))
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(BookForm);

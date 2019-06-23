import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { editCategory } from '../redux/actions';
import history from '../history';

function EditCategory({ updateCategory, category }) {
	const [ values, setValues ] = useState({ ...category });

	const { id, name } = values;

	const inputChange = (e) => {
		const { name, value } = e.target;

		setValues({ ...values, ...{ [name]: value } });
	};

	const submit = (e) => {
		e.preventDefault();
		updateCategory({ [id]: values });
		history.push(`/category/${id}`);
	};

	return (
		<div className="col-md-9">
			<h3>Edit Category</h3>
			<form className="mt-3" onSubmit={submit}>
				<div className="form-group">
					<label htmlFor="name">Name</label>
					<input
						type="text"
						className="form-control"
						id="name"
						name="name"
						value={name}
						onChange={inputChange}
					/>
				</div>

				<button type="submit" className="btn btn-primary mr-2">
					Save
				</button>
				<Link to={`/category/${id}`} className="btn btn-outline-dark">
					Cancel
				</Link>
			</form>
		</div>
	);
}

const mapStateToProps = ({ entitiesReducer }, currnetProps) => {
	const id = currnetProps.match.params.id;
	return {
		category: entitiesReducer.categories[id]
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateCategory: (category) => dispatch(editCategory(category))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(EditCategory);

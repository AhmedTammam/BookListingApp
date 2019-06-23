import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import uuid from 'uuid';

import { addCategory } from '../redux/actions';
import history from '../history';

function AddCategory({ addNewCategory }) {
	const [ values, setValues ] = useState({
		id: uuid(),
		name: ''
	});

	const { id, name } = values;

	const inputChange = (e) => {
		const { name, value } = e.target;

		setValues({ ...values, ...{ [name]: value } });
	};

	const validate = () => {
		if (id && name) {
			return true;
		}

		return false;
	};

	const submit = (e) => {
		e.preventDefault();
		if (validate()) {
			addNewCategory({ [id]: values });
			history.push(`/category/${id}`);
		} else {
			alert('empty form all fields required');
		}
	};

	return (
		<div className="col-md-9">
			<h3>Add New Category</h3>
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
				<Link to="/" className="btn btn-outline-dark">
					Cancel
				</Link>
			</form>
		</div>
	);
}

const mapDispatchToProps = (dispatch) => {
	return {
		addNewCategory: (category) => dispatch(addCategory(category))
	};
};

export default connect(null, mapDispatchToProps)(AddCategory);

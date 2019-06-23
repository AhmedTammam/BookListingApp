import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import uuid from 'uuid';

import history from '../history';

import { addAuthor } from '../redux/actions';

function AddAuthor({ addNewAuthor }) {
	const [ values, setValues ] = useState({
		id: uuid(),
		name: '',
		jobTitle: '',
		bio: ''
	});

	const { id, name, jobTitle, bio } = values;

	const inputChange = (e) => {
		const { name, value } = e.target;

		setValues({ ...values, ...{ [name]: value } });
	};

	const validate = () => {
		if (id && name && jobTitle && bio) {
			return true;
		}

		return false;
	};

	const submit = (e) => {
		e.preventDefault();

		if (validate()) {
			addNewAuthor({ [id]: values });
			history.push(`/author/${id}`);
			console.log(values);
		} else {
			alert('empty form all fields required');
		}
	};

	return (
		<div className="col-md-9">
			<h3>Add New Author</h3>
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

				<div className="form-group">
					<label htmlFor="job">Job title</label>
					<input
						type="text"
						className="form-control"
						id="job"
						name="jobTitle"
						value={jobTitle}
						onChange={inputChange}
					/>
				</div>

				<div className="form-group">
					<label htmlFor="bio">Bio</label>
					<textarea
						className="form-control"
						id="bio"
						rows="6"
						name="bio"
						value={bio}
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
		addNewAuthor: (author) => dispatch(addAuthor(author))
	};
};

export default connect(null, mapDispatchToProps)(AddAuthor);

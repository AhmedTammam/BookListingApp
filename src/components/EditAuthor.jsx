import React, { useState } from 'react';
import { connect } from 'react-redux';

import history from '../history';

import { editAuthor } from '../redux/actions';

function EditAuthor({ author, updateAuthor }) {
	const [ values, setValues ] = useState({ ...author });

	const { id, name, jobTitle, bio } = values;

	const inputChange = (e) => {
		const { name, value } = e.target;

		setValues({ ...values, ...{ [name]: value } });
	};

	const submit = (e) => {
		e.preventDefault();
		updateAuthor({ [id]: values });
		history.push(`/author/${id}`);
	};

	return (
		<div className="col-md-9">
			<h3>Edit Author</h3>
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
				<button
					className="btn btn-outline-dark"
					onClick={() => history.push(`/author/${id}`)}
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
		author: entitiesReducer.authors[id]
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateAuthor: (author) => dispatch(editAuthor(author))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(EditAuthor);

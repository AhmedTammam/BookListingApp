import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { editMode } from '../redux/actions';

function Navbar({ isEditing, updateEditMode }) {
	const navStyle = isEditing ? 'bg-danger' : 'bg-dark';
	return (
		<nav className={`${navStyle} navbar navbar-expand-lg navbar-dark fixed-top`}>
			<div>
				<Link className="navbar-brand" to="/">
					Book Listing
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
			</div>

			<div
				className="collapse navbar-collapse  justify-content-end"
				id="navbarSupportedContent"
			>
				<ul className="nav">
					<li className="nav-item">
						<Link to="/addbook" className="btn btn-primary btn-sm mr-3">
							Add Book
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/addauthor" className="btn btn-primary btn-sm mr-3">
							Add Author
						</Link>
					</li>
					<li className="nav-item dropdown">
						<Link to="/addcategory" className="btn btn-primary btn-sm mr-3">
							Add Category
						</Link>
					</li>

					<li className="nav-item dropdown">
						{isEditing ? (
							<button
								className="btn btn-success btn-sm"
								onClick={() => updateEditMode()}
							>
								Exite Edit Mode
							</button>
						) : (
							<button
								className="btn btn-danger btn-sm"
								onClick={() => updateEditMode()}
							>
								Edit Mode
							</button>
						)}
					</li>
				</ul>
			</div>
		</nav>
	);
}

const mapStateToProps = ({ uiReducer }) => ({
	isEditing: uiReducer.isEditing
});

const mapDispatchToProps = (dispatch) => {
	return {
		updateEditMode: () => dispatch(editMode())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

import React from 'react';
import { connect } from 'react-redux';

import BookCard from './BookCard';

const css = {
	padding: '20px',
	borderRadius: '5px 5px 0px 0px',
	marginBottom: '10px'
};
function CategoryCard({ isEditing }) {
	return (
		<div className="bg-light col-md-9" style={css}>
			<div className="clearfix">
				<h3 className="text-capitalize font-weight-bold float-left">
					Category Name
				</h3>
				{isEditing && (
					<button className="btn btn-info btn-sm float-right">Edit</button>
				)}
			</div>
			<div>
				<BookCard />
			</div>
		</div>
	);
}

const mapStateToProps = ({ uiReducer, entitiesReducer }) => ({
	isEditing: uiReducer.isEditing
});

export default connect(mapStateToProps)(CategoryCard);

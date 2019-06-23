import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import BookCard from './BookCard';

function Category({ isEditing, books, category }) {
	const id = category.id;
	const categoryName = category.name;

	const renderBooks = () => {
		let booksKeys = Object.keys(books).filter((key) => books[key].category === id);
		let filteredBooks = booksKeys.map((key) => books[key]);
		if (filteredBooks.length) {
			return filteredBooks.map((book) => <BookCard key={book.id} data={book} />);
		}
		return <p>not books yet</p>;
	};

	return (
		<div className="col-md-9">
			<div className="row">
				<div className="col-md-9">
					<div className="clearfix">
						<h3 className="text-capitalize font-weight-bold float-left">
							{categoryName}
						</h3>
						{isEditing && (
							<Link
								to={`/editcategory/${id}`}
								className="btn btn-info btn-sm ml-2"
							>
								Edit
							</Link>
						)}
					</div>
				</div>
			</div>
			{renderBooks()}
		</div>
	);
}

const mapStateToProps = ({ uiReducer, entitiesReducer }, currentProps) => {
	if (Object.keys(entitiesReducer.categories).length) {
		return {
			isEditing: uiReducer.isEditing,
			books: entitiesReducer.books,
			category: entitiesReducer.categories[currentProps.match.params.categoryId]
		};
	} else {
		return {
			isEditing: uiReducer.isEditing,
			books: entitiesReducer.books,
			category: {}
		};
	}
};

export default connect(mapStateToProps)(Category);

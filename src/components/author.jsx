import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import BookCard from './BookCard';

function Author({ isEditing, books, author }) {
	const { id, name, jobTitle, bio } = author;

	const renderBooks = () => {
		let booksKeys = Object.keys(books).filter((key) => books[key].author === id);
		let filteredBooks = booksKeys.map((key) => books[key]);
		if (filteredBooks.length) {
			return filteredBooks.map((book) => <BookCard key={book.id} data={book} />);
		}
		return <p>not books yet</p>;
	};

	return (
		<div className="col-md-9">
			<div className="row">
				<div className="col-md-12">
					<div className="clearfix">
						<h3 className="text-capitalize font-weight-bold float-left">
							{name}
						</h3>
						{isEditing && (
							<Link
								to={`/editauthor/${id}`}
								className="btn btn-info btn-sm ml-2"
							>
								Edit
							</Link>
						)}
					</div>
					<p className="font-italic font-weight-bold text-muted">{jobTitle}</p>
					<p className="text-muted">{bio}</p>
				</div>
			</div>
			{renderBooks()}
		</div>
	);
}

const mapStateToProps = ({ uiReducer, entitiesReducer }, currentProps) => {
	if (Object.keys(entitiesReducer.authors).length) {
		return {
			isEditing: uiReducer.isEditing,
			books: entitiesReducer.books,
			author: entitiesReducer.authors[currentProps.match.params.authorId]
		};
	} else {
		return {
			isEditing: uiReducer.isEditing,
			books: entitiesReducer.books,
			author: {}
		};
	}
};

export default connect(mapStateToProps)(Author);

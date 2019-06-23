import React from 'react';
import { connect } from 'react-redux';

import BookCard from './BookCard';

function BookCards({ books }) {
	return (
		<div className="col-md-9">
			{Object.keys(books).map((bookId) => (
				<BookCard key={bookId} data={books[bookId]} />
			))}
		</div>
	);
}

const mapStateToProps = ({ entitiesReducer }) => {
	return {
		books: entitiesReducer.books
	};
};

export default connect(mapStateToProps)(BookCards);

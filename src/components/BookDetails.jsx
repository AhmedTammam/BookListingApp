import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function BookDetails({ match, books, authors, categories, isEditing }) {
	const id = match.params.bookId;
	let book = books[id];
	if (!book) return null;

	let author = authors[book.author].name;
	let category = categories[book.category].name;

	let { description, image, isbn, pagesNumber, publishYear, title } = book;

	return (
		<React.Fragment>
			{book && (
				<div className="col-md-9">
					<div className="row">
						<div className="col-md-9">
							<div className="clearfix">
								<h3 className="text-capitalize font-weight-bold float-left w-75">
									{title}
								</h3>
								{isEditing && (
									<Link
										to={`/editbook/${book.id}`}
										className="btn btn-info btn-sm float-right"
									>
										Edit
									</Link>
								)}
							</div>
							<h6 className="font-weight-bold">
								By:
								<span className="text-muted font-italic font-weight-light">
									{author}
								</span>
							</h6>
							<h6 className="font-weight-bold">
								Number Of Pages:
								<span className="text-muted font-italic font-weight-light">
									{pagesNumber}
								</span>
							</h6>
							<h6 className="font-weight-bold">
								Publish Year:
								<span className="text-muted font-italic font-weight-light">
									{publishYear}
								</span>
							</h6>
							<h6 className="font-weight-bold">
								ISBN:
								<span className="text-muted font-italic font-weight-light">
									{isbn}
								</span>
							</h6>
							<h6 className="font-weight-bold">
								Classification:
								<span className="text-muted font-italic font-weight-light">
									{category}
								</span>
							</h6>
						</div>
						<div className="col-md-3">
							<img alt="book" src={image} className="img-fluid" />
						</div>
					</div>
					<div className="row mt-3">
						<div className="col">
							<p className="text-justify">{description}</p>
						</div>
					</div>
				</div>
			)}
		</React.Fragment>
	);
}

const mapStateToProps = ({
	entitiesReducer: { books, authors, categories },
	uiReducer: { isEditing }
}) => ({
	books,
	authors,
	categories,
	isEditing
});

export default connect(mapStateToProps)(BookDetails);

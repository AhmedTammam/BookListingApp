import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

function BookCard({ isEditing, data }) {
	const { image, description, title, id } = data;

	return (
		<div className="card mb-2">
			<div className="card-body">
				<div className="row">
					<div className="col-md-2">
						<img
							className="img-fluid"
							style={{ maxHeight: 150 }}
							src={image}
							alt="book_img"
						/>
					</div>
					<div className="col-md-10">
						<div className="clearfix">
							<Link
								to={`/bookdetails/${id}`}
								style={{ textDecoration: 'none' }}
							>
								<h4 className="text-capitalize float-left w-75">
									{title}
								</h4>
							</Link>
							{isEditing && (
								<Link
									to={`/editbook/${id}`}
									className="btn btn-info btn-sm float-right"
								>
									Edit
								</Link>
							)}
						</div>
						<div className="text-justify text-muted text-truncate">
							{description}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

const mapStateToProps = ({ uiReducer }) => ({
	isEditing: uiReducer.isEditing
});

export default connect(mapStateToProps)(BookCard);

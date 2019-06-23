import React from 'react';
import { connect } from 'react-redux';

import SidePanel from './SidePanel';

function AsideSection({ authors, categories }) {
	return (
		<div className="col-md-3">
			<SidePanel heading="category" data={categories} />
			<SidePanel heading="author" data={authors} />
		</div>
	);
}

const mapStateToProps = ({ entitiesReducer }) => {
	return {
		authors: entitiesReducer.authors,
		categories: entitiesReducer.categories
	};
};

export default connect(mapStateToProps)(AsideSection);

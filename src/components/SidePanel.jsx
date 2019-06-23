import React from 'react';

import { Link } from 'react-router-dom';

export default function SidePanel({ heading, data = {} }) {
	const renderItems = () => {
		let names = Object.keys(data).map((key) => data[key]);
		return names.map(({ name, id }) => (
			<li className="list-group-item  list-group-item-action" key={id}>
				<Link to={`/${heading}/${id}`}>{name}</Link>
			</li>
		));
	};

	return (
		<div className="card mb-3">
			<div className="card-header bg-dark text-white text-capitalize">
				{heading}
			</div>
			<div className="card-body" style={{ padding: 0 }}>
				<ul className="list-group list-group-flush">{renderItems()}</ul>
			</div>
		</div>
	);
}

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';

import { fetchData } from './redux/actions';

import Navbar from './components/Navbar';
import AsideSection from './components/AsideSection';

import BookForm from './components/BookForm';
import AddBookForm from './components/AddBookForm';
import AddAuthor from './components/AddAuthor';
import EditAuthor from './components/EditAuthor';
import AddCategory from './components/AddCategory';
import EditCategory from './components/EditCategory';

import Category from './components/Category';
import Author from './components/author';
import BookCards from './components/BookCards';
import BookDetails from './components/BookDetails';

import fetchApi from './server/books.js';
import { normalize, schema } from 'normalizr';

function App({ fetchData }) {
	useEffect(
		() => {
			const getData = async () => {
				let reqData = await fetchApi();
				const categ = new schema.Entity('categories');
				const author = new schema.Entity('authors');
				const book = new schema.Entity('books');

				const normalData = normalize(reqData, {
					books: [ book ],
					authors: [ author ],
					categories: [ categ ]
				});
				fetchData(normalData.entities);
			};
			getData();
		},
		[ fetchData ]
	);

	return (
		<Router history={history}>
			<Navbar />
			<div className="container" style={{ marginTop: 70 }}>
				<div className="row">
					<AsideSection />
					<Switch>
						<Route path="/addbook" component={AddBookForm} />
						<Route
							path="/editbook/:id"
							component={(props) => <BookForm name="editbook" {...props} />}
						/>
						<Route path="/author/:authorId" component={Author} />

						<Route path="/addauthor" component={AddAuthor} />
						<Route path="/editauthor/:id" component={EditAuthor} />
						<Route path="/addcategory" component={AddCategory} />
						<Route path="/editcategory/:id" component={EditCategory} />

						<Route path="/bookdetails/:bookId" component={BookDetails} />
						<Route path="/category/:categoryId" component={Category} />
						<Route path="/" exact component={BookCards} />
					</Switch>
				</div>
			</div>
		</Router>
	);
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchData: (data) => dispatch(fetchData(data))
	};
};
export default connect(null, mapDispatchToProps)(App);

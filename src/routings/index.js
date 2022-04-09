import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import cx from 'classnames';
import styles from '../assets/scss/design.module.scss';
import Footer from '../assets/components/footer';
import Header from '../assets/components/header';
import Home from '../pages/Home';
import Sidebar from '../assets/components/sidebar';
import SecondarySidebar from '../assets/components/secondary_sidebar';

const AppRoute = {
	home: "/",
	auth: "/auth",
	PageNotFound: "/page-not-found",
	default: '/',

	//List
	UsersList: '/users/list',
};

export default function AppRoutings() {
	return (
		<Router>
			{/* <Header /> */}
			<Sidebar/>
			<div className={styles.rightContainer}>
				<SecondarySidebar/>
				<div className={styles.rightContent}>
					<Routes>
						<Route path={AppRoute.default} element={<Home/>} />
					</Routes>
				</div>
			</div>
			{/* <Footer /> */}
		</Router>
	);
}

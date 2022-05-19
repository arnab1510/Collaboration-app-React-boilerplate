import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import cx from 'classnames';
import styles from '../assets/scss/design.module.scss';
import Home from '../pages/Home';
import Sidebar from '../assets/components/sidebar';
import SecondarySidebar from '../assets/components/secondary_sidebar';
import Vault from '../pages/Vault';
import VaultDoc from '../pages/VaultDoc';

const AppRoute = {
	home: "/",
	auth: "/auth",
	PageNotFound: "/page-not-found",
	default: '/',
	vault: '/vault',
	doc: '/vault/doc/:doc_id',

	//List
	UsersList: '/users/list',
};

export default function AppRoutings() {

	const [showSidebar,setShowSidebar] = React.useState();

	return (
		<Router>
			{/* <Header /> */}
			<Sidebar/>
			<div className={styles.rightContainer}>
				{/* {showSecSidebar?<SecondarySidebar/>:null} */}
				<div className={styles.rightContent}>
					<Routes>
						<Route path={AppRoute.default} element={<Home/>} />
						<Route path={AppRoute.vault} element={<Vault/>} />
						<Route path={AppRoute.doc} element={<VaultDoc/>} />
					</Routes>
				</div>
			</div>
			{/* <Footer /> */}
		</Router>
	);
}

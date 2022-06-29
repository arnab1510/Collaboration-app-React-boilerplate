import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SecondarySidebar from '../assets/components/secondary_sidebar';
import Sidebar from '../assets/components/sidebar';
import styles from '../assets/scss/design.module.scss';
import Home from '../pages/Home';
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

	return (
		<Router>
			{/* <Header /> */}
			<Sidebar/>
			<div className={styles.rightContainer}>
				<SecondarySidebar/>
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

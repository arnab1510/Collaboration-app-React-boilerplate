import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SecondarySidebar from '../assets/components/secondary_sidebar';
import Sidebar from '../assets/components/sidebar';
import styles from '../assets/scss/design.module.scss';
import Build from '../pages/Build';
import Chat from '../pages/Chat';
import Features from '../pages/Features';
import Home from '../pages/Home';
import Roadmap from '../pages/Roadmap';
import Sprint from '../pages/Sprint';
import Vault from '../pages/Vault';
import VaultDoc from '../pages/VaultDoc';
import Wall from '../pages/Wall';

const AppRoute = {
	home: "/",
	wall: "/wall",
	chat: "/chat/:user_id",
	auth: "/auth",
	PageNotFound: "/page-not-found",
	default: '/',
	vault: '/vault',
	features: '/features',
	sprint: '/sprint',
	build: '/build',
	doc: '/vault/doc/:doc_id',
	roadmap: '/roadmap',

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
						<Route path={AppRoute.chat} exact element={<Chat/>} />
						<Route path={AppRoute.vault} element={<Vault/>} />
						<Route path={AppRoute.doc} element={<VaultDoc/>} />
						<Route path={AppRoute.features} element={<Features/>} />
						<Route path={AppRoute.build} element={<Build/>} />
						<Route path={AppRoute.sprint} element={<Sprint/>} />
						<Route path={AppRoute.roadmap} element={<Roadmap/>} />
						<Route path={AppRoute.wall} element={<Wall/>} />
					</Routes>
				</div>
			</div>
			{/* <Footer /> */}
		</Router>
	);
}

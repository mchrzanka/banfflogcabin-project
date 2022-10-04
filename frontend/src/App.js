//lets us set up the router. Installed with npm install react-router-dom
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//page import
import HomePage from './pages/homePage';
import AboutUs from './pages/aboutUs';
import Rates from './pages/rates';
import Contact from '/pages/contact';
import Booking from '/pages/booking';

//components import
import SiteHeader from './components/header';
import Footer from './components/footer';

function App() {
	return (
		<div className='App'>
			<SiteHeader />
			<Switch>
				<Route path='/'>
					<HomePage />
				</Route>
				<Route path='/aboutus'>
					<AboutUs />
				</Route>
				<Route path='/rates'>
					<Rates />
				</Route>
				<Route path='/contact'>
					<Contact />
				</Route>
				<Route path='/booking'>
					<Booking />
				</Route>
			</Switch>
		</div>
	);
}

export default App;

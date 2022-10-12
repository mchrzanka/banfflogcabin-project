//lets us set up the router. Installed with npm install react-router-dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//page import
import HomePage from './pages/homePage';
import OurCabin from './pages/ourCabin';
import AboutUs from './pages/aboutUs';
import Rates from './pages/rates';
import Contact from './pages/contact';
import BookingPageOne from './pages/bookingPageOne';
import BookingPageTwo from './pages/bookingPageTwo';

//components import
import SiteHeader from './components/header';
import Footer from './components/footer';

function App() {
	return (
		<Router>
			<div className='App'>
				<SiteHeader />
				<Routes>
					<Route path='/' element={<HomePage />}></Route>
					<Route path='/ourcabin' element={<AboutUs />}></Route>
					<Route path='/aboutus' element={<OurCabin />}></Route>
					<Route path='/rates' element={<Rates />}></Route>
					<Route path='/contact' element={<Contact />}></Route>
					<Route path='/booking' element={<BookingPageOne />}></Route>
					<Route path='/confirmbooking' element={<BookingPageTwo />}></Route>
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;

//lets us set up the router. Installed with npm install react-router-dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//page import
import HomePage from './pages/homePage';
import OurCabin from './pages/ourCabin';
import AboutUs from './pages/aboutUs';
import Rates from './pages/rates';
import Contact from './pages/contact';
import BookingPage from './pages/bookingPage';
import BookingTerms from './pages/bookingTerms';

//components import
import SiteHeader from './components/header/header';
import Footer from './components/footer/footer';
import SuccessPage from './pages/success';

function App() {
	return (
		<Router>
			<div className='App'>
				<SiteHeader />
				<main>
					<Routes>
						<Route path='/' element={<HomePage />}></Route>
						<Route path='/ourcabin' element={<OurCabin />}></Route>
						<Route path='/aboutus' element={<AboutUs />}></Route>
						<Route path='/rates' element={<Rates />}></Route>
						<Route path='/contact' element={<Contact />}></Route>
						<Route path='/bookingterms' element={<BookingTerms />}></Route>
						<Route path='/booking' element={<BookingPage />}></Route>
						<Route path='/success' element={<SuccessPage />}></Route>
					</Routes>
				</main>
				<Footer />
			</div>
		</Router>
	);
}

export default App;

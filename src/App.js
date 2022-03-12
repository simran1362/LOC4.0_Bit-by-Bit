import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar/Navbar2';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Events from './pages/events';
import AnnualReport from './pages/annual';
import Teams from './pages/team';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';
import Carousel from './components/carousel';
import InfoCard from './components/card';
import './components/footer/FooterStyles.css';
import Footer from './components/footer/Footer';
function App() {
return (
    <>
	<Router>
	<Navbar />
	<Navbar2/>
	<Routes>
		<Route path='/' exact component={Home} />
		<Route path='/about' component={About} />
		<Route path='/events' component={Events} />
		<Route path='/annual' component={AnnualReport} />
		<Route path='/team' component={Teams} />
		<Route path='/blogs' component={Blogs} />
		<Route path='/sign-up' component={SignUp} />
	</Routes>
  
	</Router>
  <Carousel/>
  <InfoCard/>
  <Footer/>
  </>
  
);
}


export default App;

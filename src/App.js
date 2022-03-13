import './App.css';
import {Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink,} from './components/Navbar';
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar/Navbar2';
import { BrowserRouter as Router, Routes, Route , useNavigate } from 'react-router-dom';
import Home from './components/home';
//import from './components/home';
import Mygoals from './components/mygoals';
import Achievements from './components/achievements';
import MyPlaylist from './components/myPlaylist';
import SignUp from './components/signup';
import Carousel from './components/carousel';
import InfoCard from './components/card';
import { Schedule } from '@mui/icons-material';

function App() {
return (
  <>
	<Router>
	<Navbar />
	<Navbar2/>
	<Routes>
		<Route path='/' exact component={Home} />
		<Route path='/Mygoals' element={<Mygoals/>} />
		<Route path='/Schedule' element={<Schedule/>} />
		<Route path='/achievements' element={<Achievements/>} />
		<Route path='/myplaylist' element={<MyPlaylist/>} />
		<Route path='/calender' element={<calender/>} />
	</Routes>
  
	</Router>
  <Carousel/>
  <InfoCard/>
  </>
  
);
}


export default App;

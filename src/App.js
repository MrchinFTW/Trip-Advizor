import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import WhereTo from './components/whereTo/WhereTo';
import { useState } from 'react';

function App() {
	const [time, setTime] = useState(null);
	const [destination, setDestination] = useState(null);
	return (
		<div className='App'>
			<Header />
			<WhereTo />
			{/* <Footer /> */}
		</div>
	);
}

export default App;

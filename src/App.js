import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
	return (
		<div className="App">
			<Nav />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/projets' element={<Project />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
		</div>
	);
}

export default App;

import './App.css';
import Header from './Header';
import data from './data';
import Trip from './Trip';

function App() {
	const trips = data.map((trip) => {
		return <Trip {...trip} />;
	});

	return (
		<div className="App">
			<Header />
			<section className="trips-list">{trips}</section>
		</div>
	);
}

export default App;

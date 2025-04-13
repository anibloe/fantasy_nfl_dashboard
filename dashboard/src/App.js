import logo from "./logo.svg";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				${"process.env.REACT_APP_NAME"}
				<img src={logo} className="App-logo" alt="logo" />
			</header>
		</div>
	);
}

const url = "https://api.sleeper.app/v1/league/1048177924643483648/rosters";
try {
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error(`Response status: ${response.status}`);
	}

	const rosters = await response.json();

	rosters.forEach((roster) => {
		const starters = roster.starters;

		starters.map((starterID) => {
			console.log(players[starterID]?.full_name);
		});
	});
} catch (error) {
	console.error(error.message);
}

export default App;

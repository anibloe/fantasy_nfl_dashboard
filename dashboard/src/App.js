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

export default App;

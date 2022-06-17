import Classes from './App.module.css';
import Form from './components/Form';

function App() {
	const isLoggedIn = true;
	return (
		<div className={Classes.homeContainer}>
			{isLoggedIn && (
				<>
					<h1>hello from broadcast apps</h1>
					<Form />
				</>
			)}
		</div>
	);
}

export default App;

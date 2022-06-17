import Classes from './Home.module.css';
import Form from '../components/Form';
const Home = () => {
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
};

export default Home;

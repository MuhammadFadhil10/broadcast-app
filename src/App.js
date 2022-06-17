import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Form from './components/Form';
import Btn from './components/Btn';
import Classes from './App.module.css';

function App() {
	const [emailValue, setEmailValue] = useState('');
	const [passwordValue, setPasswordValue] = useState('');
	const [phoneValue, setPhoneValue] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const [successMessage, setSuccessMessage] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const registerHandler = async () => {
		setIsLoading(true);
		try {
			const response = await axios.post('http://localhost:5000/register', {
				email: emailValue,
				password: passwordValue,
				phone: phoneValue,
			});
			response.data && setIsLoading(false);
			setErrorMessage('');
			setSuccessMessage(response.data.message);
			console.log(response);
		} catch (error) {
			setSuccessMessage('');
			setErrorMessage(error.message);
		}
	};

	return (
		<>
			<div className={Classes.registerContainer}>
				<h1>Admin register</h1>
				<p>{errorMessage && errorMessage}</p>
				<p>{successMessage && successMessage}</p>
				{/* form type and inputValue property must be same word */}
				<Form
					type={['email', 'password', 'phone']}
					inputValue={{
						email: emailValue,
						password: passwordValue,
						phone: phoneValue,
					}}
					setValue={{
						setEmailValue: setEmailValue,
						setPasswordValue: setPasswordValue,
						setPhoneValue: setPhoneValue,
					}}
				/>
				<Btn
					name={isLoading ? 'Submitting..' : 'Register'}
					color='#120c33'
					clickHandler={registerHandler}
				/>
				<Link to='#'>You are admin? Login here</Link>
			</div>
		</>
	);
}

export default App;

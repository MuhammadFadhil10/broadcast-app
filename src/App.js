import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Form from './components/Form';
import Btn from './components/Btn';
import Classes from './App.module.css';

function App() {
	const [emailValue, setEmailValue] = useState('');
	const [passwordValue, setPasswordValue] = useState('');
	const [phoneValue, setPhoneValue] = useState('');

	const registerHandler = () => {
		console.log(emailValue, passwordValue, phoneValue);
		// alert();
	};

	return (
		<>
			<div className={Classes.registerContainer}>
				<h1>Admin register</h1>
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
				<Btn name='Register' color='#120c33' clickHandler={registerHandler} />
				<Link to='#'>You are admin? Login here</Link>
			</div>
		</>
	);
}

export default App;

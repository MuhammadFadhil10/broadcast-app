import Classes from './Form.module.css';
import Btn from './Btn';

const Form = () => {
	return (
		<>
			<div className={Classes.formContainer}>
				<h2>add contacts</h2>
				<form className={Classes.form}>
					<label htmlFor=''>name</label>
					<input type='text' name='' id='' />
					<label htmlFor=''>email</label>
					<input type='email' name='' id='' />
					<Btn name='Add' color='#120c33' />
				</form>
			</div>
		</>
	);
};

export default Form;

import React, { useState } from 'react';

import Classes from './Form.module.css';
import Btn from './Btn';

const Form = ({ type, inputValue, setValue }) => {
	return (
		<>
			<div className={Classes.formContainer}>
				<form className={Classes.form}>
					{type.map((type) => {
						return (
							<>
								<label>{type}</label>
								<input
									type={type === 'phone' ? 'number' : type}
									name={type}
									value={inputValue.type}
									onChange={(e) => {
										return type === 'email'
											? setValue.setEmailValue(e.target.value)
											: type === 'password'
											? setValue.setPasswordValue(e.target.value)
											: type === 'phone'
											? setValue.setPhoneValue(e.target.value)
											: '';
									}}
								/>
							</>
						);
					})}
				</form>
			</div>
		</>
	);
};

export default Form;

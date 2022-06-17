import React from 'react';
import Classes from './Navigation.module.css';

const Navigation = () => {
	return (
		<>
			<div className={Classes.navbarContainer}>
				<div className={Classes.navbarBrand}></div>
				<div className={Classes.navbarInput}></div>
				<div className={Classes.navbarMenu}></div>
			</div>
		</>
	);
};

export default Navigation;

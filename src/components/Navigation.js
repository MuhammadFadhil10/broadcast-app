import React from 'react';
import Classes from './Navigation.module.css';

const Navigation = () => {
	return (
		<>
			<div className={Classes.navbarContainer}>
				<div className={Classes.navbarBrandContainer}>
					<img src='' alt='Logo' className={Classes.navbarBrandLogo} />
					<h1 className={Classes.navbarBrandText}>myBroadcast</h1>
				</div>
				{/* <div className={Classes.navbarInput}></div> */}
				<div className={Classes.navbarMobileMenu}>
					<div className={Classes.menuStripe}></div>
					<div className={Classes.menuStripe}></div>
					<div className={Classes.menuStripe}></div>
				</div>
			</div>
		</>
	);
};

export default Navigation;

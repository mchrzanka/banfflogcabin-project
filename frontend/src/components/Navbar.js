import React from 'react';
import {
	AppBar,
	div,
	Toolbar,
	Typography,
	Icona,
	Avatar,
	a,
} from '@material-ui/core';
import { Stack } from '@mui/material';
import { Menu } from '@mui/icons-material';
import "../css/index.css";
import styles from "./Navbar.module.css";

//WONT WORK WITHOUT THIS
//npm install @mui/icons-material @mui/material @emotion/styled @emotion/react @material-ui/core --legacy-peer-deps



const handleClick = () => {
	console.log('click');
	if (document.querySelector('#menuItems').style.display == 'flex') {
		document.querySelector('#menuItems').style.display = 'none';
		document.querySelector('#menuItems').style.height = 'initial';
	} else {
		document.querySelector('#menuItems').style.display = 'flex';
		document.querySelector('#menuItems').style.height = '23rem';
	}
};


const Navbar = () => {
	return (
		<>
			<header>
				<nav>
					<div className={styles.toolbarStyle} id='toobarStyle'>
						<a href='/ourcabin'>
							<img width="40" height="40" 
								alt='Banff Log Cabin Logo'
								src='https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg'
							/>
						</a>
						<ul id='menuItems' className={styles.mainNavStack}>
							<li><a href='/ourcabin'>Our Cabin</a></li>
							<li><a href='/aboutus'>About Us</a></li>
							<li><a href='/rates'>Rates</a></li>
							<li><a href='/contact'>Contact</a></li>
							<li><a href='/booking'>Book Now</a></li>
						</ul>
						<div onClick={handleClick} aria-label='Main Menu' className={styles.hamburgerWrapper}>
							<img src='https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg' width="40" height="40"  alt="menubtn" className={styles.hamburger}></img>
						</div>
					</div>
				</nav>
			</header>
		</>
	);
};

export default Navbar;

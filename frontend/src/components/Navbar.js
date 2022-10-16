import React from 'react';
import {
	AppBar,
	Box,
	Toolbar,
	Typography,
	IconButton,
	Avatar,
	Button,
} from '@material-ui/core';
import { Stack } from '@mui/material';
import { Menu } from '@mui/icons-material';
import "./Navbar.module.css";

//WONT WORK WITHOUT THIS
//npm install @mui/icons-material @mui/material @emotion/styled @emotion/react @material-ui/core --legacy-peer-deps



const handleClick = () => {
	console.log('click');
	if (document.querySelector('#menuItems').style.display == 'flex') {
		document.querySelector('#menuItems').style.display = 'none';
	} else {
		document.querySelector('#menuItems').style.display = 'flex';
	}
};


const Navbar = () => {
	return (
		<>
			<Box>
				<AppBar position='sticky' disablegutters='true' display='flex'>
					<Toolbar className='toolbarStyle'>
						<Avatar
							sx={{ width: 40, height: 40 }}
							alt='Banff Log Cabin Logo'
							src='https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg'
						/>
						<Typography variant='h6' color='inherit' className='flex'>
							Banff Log Cabin
						</Typography>
						<Stack id='menuItems' className='menuItems mainNavStack'>
							<Button href='/ourcabin'>Our Cabin</Button>
							<Button href='/aboutus'>About Us</Button>
							<Button href='/rates'>Rates</Button>
							<Button href='/contact'>Contact</Button>
							<Button href='/booking'>Book Now</Button>
						</Stack>
						<IconButton onClick={handleClick} color='inherit' aria-label='Menu'>
							<Menu />
						</IconButton>
					</Toolbar>
				</AppBar>
			</Box>
		</>
	);
};

export default Navbar;

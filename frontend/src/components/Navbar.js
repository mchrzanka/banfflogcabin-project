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
import '../css/Navbar.css';

//WONT WORK WITHOUT THIS
//npm install @mui/icons-material @mui/material @emotion/styled @emotion/react @material-ui/core --legacy-peer-deps


const styles = {
	//IMPORT MATERIAL UI AND MATERIAL UI ICONS FIRST
	customizeToolbar: {
		display: 'none',
	},
	flex: {
		display: 'flex',
		flex: 1,
		justifyContent: 'space-between',
		backgroundColor: 'green',
	},
	mainNavStack: {
		display: 'none',
		flexDirection: 'column',
		background: 'brown',
		'@media (min-width: 780px)' : {
			display: 'inline-block',
			position: 'relative',
			textTransform: 'uppercase',
		},
		position: 'absolute',
		bottom: '100',
		top: '0px',
		left: '0',
		width: '100vw',
		padding: '3rem 0',
	},
	mainNavStackHidden: {
		display: 'none',
	},
	iconButton: {
		'@media (min-width: 780px)' : {
		height: '0px',
		width: '0px'
		}
	},
};

const toolbarStyle = {
	minHeight: '80px',
	display: 'flex',
	flex: 1,
	justifyContent: 'space-between',
	backgroundColor: 'green',
};

const handleClick = () => {
	console.log('click');
	if (document.querySelector('#menuItems').style.display == 'flex') {
		document.querySelector('#menuItems').style.display = 'none';
	} else {
		document.querySelector('#menuItems').style.display = 'flex';
	}
};

// const SimpleMediaQuery = () => {
// 	const matches = useMediaQuery('(min-width:600px)');
  
// 	return <span>{`(min-width:600px) matches: ${matches}`}</span>;
//   }
//   SimpleMediaQuery();

const Navbar = () => {
	return (
		<>
			<Box>
				<AppBar position='sticky' disablegutters='true' display='flex'>
					<Toolbar style={toolbarStyle}>
						<Avatar
							sx={{ width: 40, height: 40 }}
							alt='Banff Log Cabin Logo'
							src='https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg'
						/>
						<Typography variant='h6' color='inherit' sx={styles.flex}>
							Banff Log Cabin
						</Typography>
						<Stack id='menuItems' sx={styles.mainNavStack}>
							<Button href='/ourcabin'>Our Cabin</Button>
							<Button href='/aboutus'>About Us</Button>
							<Button href='/rates'>Rates</Button>
							<Button href='/contact'>Contact</Button>
							<Button href='/booking'>Book Now</Button>
						</Stack>
						<IconButton onClick={handleClick} sx={{ 
                mr: 2,
                display: {
                  xs: 'block',
                  sm: 'none',
                }
              }} color='inherit' aria-label='Menu'>
							<Menu />
						</IconButton>
					</Toolbar>
				</AppBar>
			</Box>
		</>
	);
};

export default Navbar;

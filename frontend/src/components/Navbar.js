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
import { green, red } from '@material-ui/core/colors';
import { flexbox } from '@mui/system';

//npm install @mui/icons-material @mui/material @emotion/styled @emotion/react --legacy-peer-deps
//npm install @material-ui/core --legacy-peer-deps

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
	submenuPadding: {
		display: 'none',
		flexDirection: 'column',
		position: 'absolute',
		bottom: '100',
		top: '0px',
		left: '0',
		background: 'brown',
		width: '100vw',
		padding: '3rem 0',
	},
	submenuPaddingHidden: {
		display: 'none',
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
						<Stack id='menuItems' sx={styles.submenuPadding}>
							<Button href='/aboutus'>About Us</Button>
							<Button>Hellooo</Button>
							<Button>Hellooo</Button>
							<Button>Hellooo</Button>
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

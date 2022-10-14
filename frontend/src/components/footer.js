import React from 'react';
//npm install react-router-dom
import { Link } from 'react-router-dom';
import { AppBar, Box, Toolbar, Typography, IconButton, Avatar, Button} from '@material-ui/core';
import { Stack } from "@mui/material";
import { makeStyles } from '@material-ui/styles';
import '../css/footer.css'


  

const styles = {
  footerPadding: {    
    width: "80%",
	margin: "0 auto",
  },
};


  

const handleClick = () => {
    console.log("click");
}

const Footer = () => {
  return (
    <>
		<div className='site-footer' id="siteFooter">
			<div className='container' >
				<Box>
					<Toolbar >
						<Stack id='footerItems' sx={styles.footerPadding}>
							<Button href="/booking" aria-label='contact' variant='outlined'>Book Now</Button>
							<Typography variant="h6">Contact Us</Typography>
								<Typography>222 Glen Crescent Banff, AB T1L 1A6 +1 (403) 762-3516</Typography>
								<Typography>2022 Banff Log Cabin</Typography>
						</Stack>
					</Toolbar>
				</Box>
			</div>
	    </div>
    </>
  );
};

export default Footer;
import React from 'react';
//npm install react-router-dom
import "../css/index.css";
import styles from './footer.module.css';


  



  

const handleClick = () => {
    console.log("click");
}

const Footer = () => {
  return (
    <>
		<footer className={styles.siteFooter} id="siteFooter">
			<div className={styles.container}>
				<div>
					<ul id='footerItems' sx={styles.footerPadding}>
						<li><a href="/booking" aria-label='book' className={styles.btn}>Book Now</a></li>
						<li><p>Contact Us</p></li>
						<li><p>222 Glen Crescent Banff, AB T1L 1A6 +1 (403) 762-3516</p></li>
						<li><p>2022 Banff Log Cabin</p></li>
					</ul>
				</div>
			</div>
	    </footer>
    </>
  );
};

export default Footer;
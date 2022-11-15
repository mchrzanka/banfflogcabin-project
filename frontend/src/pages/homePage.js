//shortcut : rfc tab (creates a react functional component)
import React from 'react';
import Reviews from '../components/reviews/reviews';
import useFetch from '../hooks/useFetch';
import homeBannerSM from '../img/banner-home-sm.jpg';
import homeBannerLG from '../img/banner-home-lg.jpg';

import '../scss/pages/_homepage.scss';

export default function HomePage() {
	const { loading, error, data } = useFetch(
		'http://147.182.207.198:1337/api/homepage'
	);

	if (loading) {
		return <p>Loading...</p>;
	} else if (error === []) {
		return <p>Error</p>;
	}

	return (
		<div>
			<div className='home-page'>
				<div className=' heading1 '>
					{data.data.attributes.h1}{' '}
					<div className='button main'>
						<a className='primary-btn btn ' href='/bookingterms'>
							Book Now
						</a>
					</div>
				</div>
				<picture className='banner-img'>
					<source media='(min-width:420px)' srcSet={homeBannerLG} />
					<img src={homeBannerSM} alt='Flowers' />
				</picture>
				<div className='container top-content'>
					<div className='heading2'>{data.data.attributes.h21}</div>
					<div className='content'>{data.data.attributes.content1}</div>
				</div>

				<div>
					{/* OUR CABIN STUFF */}
					<div className='desktop'>
						<div className='cabin-flex'>
							<div className='cabin1'>
								<div className='ourcabin-ban'>
									<div className='heading2'>{data.data.attributes.h22}</div>
								</div>
								<div className='cabin-content'>
									<div className='content container '>
										{data.data.attributes.content2}
									</div>
									<div className='button '>
										<a>Our Cabin</a>
									</div>
								</div>
							</div>
							<div className='cabin2'></div>
						</div>

						<div className='ammenities'>
							<div className='flex'>
								<div className='flex-content'>
									<div className='ammenities-ban'>
										<div className='heading2'>Ammenities</div>
									</div>
									<div className='list'>
										<div className='div1'>
											<div>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													data-name='Layer 2'
													viewBox='0 0 64 64'
												>
													<path d='M60 40h-1v-4a5 5 0 0 0-5-5h-1V18a7 7 0 0 0-7-7H18a7 7 0 0 0-7 7v13h-1a5 5 0 0 0-5 5v4H4a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h7.33a1 1 0 0 0 .95-.68l.72-2.27a3 3 0 0 1 2.84-2h32.28a3 3 0 0 1 2.84 2l.76 2.27a1 1 0 0 0 1 .68H60a1 1 0 0 0 1-1V41a1 1 0 0 0-1-1ZM13 18a5 5 0 0 1 5-5h28a5 5 0 0 1 5 5v13h-3.18c.3-.84.13-1.21.18-3a3 3 0 0 0-3-3h-7a3 3 0 0 0-3 3c0 1.79-.12 2.16.18 3h-6.36c.3-.84.13-1.21.18-3a3 3 0 0 0-3-3h-7a3 3 0 0 0-3 3c.05 1.79-.12 2.16.18 3H13Zm24 12v-2a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1Zm-19 0v-2a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1ZM7 36a3 3 0 0 1 3-3h44a3 3 0 0 1 3 3v4H7Zm52 15h-5.61l-.53-1.58A5 5 0 0 0 48.12 46H15.88a5 5 0 0 0-4.74 3.42L10.61 51H5v-9h54Z' />
												</svg>
												<p>Queen Sized Bed</p>
											</div>
											<div>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													viewBox='0 0 69 69'
												>
													<path d='M14.185,15.908l-0,-2.083c-0,-0.552 0.219,-1.082 0.61,-1.473c0.391,-0.391 0.921,-0.61 1.473,-0.61c1.234,-0 1.042,-0 1.042,-0c0.575,-0 1.042,0.466 1.042,1.041c-0,0.575 -0.467,1.042 -1.042,1.042l-1.042,0l0,2.083l2.389,0c-0.575,0 -1.042,-0.466 -1.042,-1.041c0,-0.575 0.467,-1.042 1.042,-1.042l5.639,0c0.575,0 1.042,0.467 1.042,1.042c-0,0.575 -0.467,1.041 -1.042,1.041l2.389,0l-0,-2.083l-1.042,0c-0.575,0 -1.041,-0.467 -1.041,-1.042c-0,-0.575 0.466,-1.041 1.041,-1.041c0,-0 -0.192,-0 1.042,-0c0.552,-0 1.082,0.219 1.473,0.61c0.391,0.391 0.61,0.921 0.61,1.473l0,2.083l10.417,0l0,-2.083c0,-0.552 0.22,-1.082 0.611,-1.473c0.39,-0.391 0.92,-0.61 1.473,-0.61c1.234,-0 1.041,-0 1.041,-0c0.575,-0 1.042,0.466 1.042,1.041c-0,0.575 -0.467,1.042 -1.042,1.042l-1.041,0l-0,2.083l2.388,0c-0.575,0 -1.041,-0.466 -1.041,-1.041c-0,-0.575 0.466,-1.042 1.041,-1.042l5.64,0c0.575,0 1.041,0.467 1.041,1.042c0,0.575 -0.466,1.041 -1.041,1.041l2.388,0l0,-2.083l-1.041,0c-0.575,0 -1.042,-0.467 -1.042,-1.042c-0,-0.575 0.467,-1.041 1.042,-1.041c-0,-0 -0.193,-0 1.041,-0c0.553,-0 1.083,0.219 1.473,0.61c0.391,0.391 0.611,0.921 0.611,1.473l-0,2.083l3.125,0c2.876,0 5.208,2.332 5.208,5.209c-0,-0 -0,22.055 -0,29.166c-0,2.877 -2.332,5.209 -5.208,5.209c-10.09,-0 -35.744,-0 -45.834,-0c-2.876,-0 -5.208,-2.332 -5.208,-5.209c-0,-7.111 -0,-25.531 -0,-29.166c-0,-2.877 2.332,-5.209 5.208,-5.209l3.125,0Zm45.834,14.585l-52.084,-0l0,19.79c0,1.726 1.399,3.125 3.125,3.125c10.09,0 35.744,0 45.834,0c1.726,0 3.125,-1.399 3.125,-3.125l-0,-19.79Zm-4.168,8.332c0,-1.151 -0.933,-2.083 -2.083,-2.083c-5.775,-0 -33.808,-0 -39.583,-0c-1.15,-0 -2.083,0.932 -2.083,2.083c-0,2.354 -0,8.063 -0,10.417c-0,1.15 0.933,2.083 2.083,2.083c5.775,0 33.808,0 39.583,0c1.15,0 2.083,-0.933 2.083,-2.083l0,-10.417Zm-41.666,0l0,10.417l39.583,-0l-0,-10.417l-39.583,0Zm-1.041,-4.167l41.665,0c0.575,0 1.042,-0.466 1.042,-1.041c0,-0.575 -0.467,-1.042 -1.042,-1.042l-41.665,0c-0.575,0 -1.042,0.467 -1.042,1.042c-0,0.575 0.467,1.041 1.042,1.041Zm46.875,-13.541c-0,-1.726 -1.399,-3.125 -3.125,-3.125c-10.09,-0 -35.744,-0 -45.834,-0c-1.726,-0 -3.125,1.399 -3.125,3.125l0,7.291l52.084,0l-0,-7.291Zm-35.722,3.431l0.153,0.153c0.407,0.407 0.407,1.067 0,1.473c-0.406,0.407 -1.066,0.407 -1.473,0l-0.153,-0.153c-1.162,0.554 -2.596,0.351 -3.557,-0.611c-1.22,-1.219 -1.22,-3.2 -0,-4.419c1.219,-1.22 3.2,-1.22 4.419,-0c0.962,0.961 1.165,2.395 0.611,3.557Zm19.36,-2.695l-0.154,-0.153c-0.406,-0.407 -0.406,-1.067 0,-1.473c0.407,-0.407 1.067,-0.407 1.474,-0l0.153,0.153c1.162,-0.554 2.596,-0.351 3.557,0.611c1.22,1.219 1.22,3.2 0,4.419c-1.219,1.22 -3.2,1.22 -4.419,0c-0.962,-0.961 -1.165,-2.395 -0.611,-3.557Zm3.557,0.611c0.406,0.406 0.406,1.066 -0,1.473c-0.407,0.407 -1.067,0.407 -1.473,0c-0.407,-0.407 -0.407,-1.067 -0,-1.473c0.406,-0.407 1.066,-0.407 1.473,-0Zm-26.474,1.473c-0.407,-0.407 -0.407,-1.067 -0,-1.473c0.407,-0.407 1.067,-0.407 1.473,-0c0.407,0.406 0.407,1.066 0,1.473c-0.406,0.407 -1.066,0.407 -1.473,0Z' />
												</svg>
												<p>Cast Iron Gas Stove</p>
											</div>
											<div>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													viewBox='0 0 25 25'
												>
													<path d='M12.5,17A1.5,1.5,0,1,0,14,18.5,1.5,1.5,0,0,0,12.5,17Zm0,2a.5.5,0,1,1,.5-.5A.5.5,0,0,1,12.5,19Zm10.015-8.809a.5.5,0,0,1-.706-.036,12.506,12.506,0,0,0-18.618,0,.5.5,0,1,1-.742-.67,13.5,13.5,0,0,1,20.1,0A.5.5,0,0,1,22.515,10.191Zm-2.8,2.144a.5.5,0,0,1-.76.65,8.483,8.483,0,0,0-12.92,0,.5.5,0,1,1-.76-.65,9.483,9.483,0,0,1,14.44,0ZM16.9,15.2a.5.5,0,1,1-.8.6,4.5,4.5,0,0,0-7.2,0,.5.5,0,1,1-.8-.6,5.5,5.5,0,0,1,8.8,0Z' />
												</svg>
												<p>Wireless Internet</p>
											</div>
											<div>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													viewBox='0 0 50 50'
												>
													<path d='M1 38h23v3H12v2h26v-2H26v-3h23V8H1v30zm2-28h44v26H3V10z' />
												</svg>
												<p>Flat Screen TV</p>
											</div>
											<div>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													width='32'
													height='32'
												>
													<path
														d='M21.383 4c-1.19 0-2.173.887-2.346 2.031-.45.061-.889.212-1.293.451A3.6 3.6 0 0 0 16 9.584v.5h1V11h1v-.916h1V11h1v-.916h1V11h1v-.916h1v-.5a3.6 3.6 0 0 0-1.744-3.102 3.433 3.433 0 0 0-1.211-.435A1.364 1.364 0 0 1 21.383 5h4.234C26.391 5 27 5.61 27 6.387V16H13.996a.5.5 0 0 0-.014-.178c-.266-1.02-1.162-1.71-2.17-1.71-.148 0-.285.055-.43.085-.381-.738-1.05-1.295-1.898-1.295v.002c-.813 0-1.513.458-1.906 1.12a1.98 1.98 0 0 0-.77.351c-.518-.534-1.218-.866-1.98-.867-1.423 0-2.584 1.095-2.787 2.492H2c-.545 0-1 .455-1 1v2c0 .545.455 1 1 1v4c0 2.207 1.793 4 4 4v1h1v-1h18v1h1v-1c2.207 0 4-1.793 4-4v-4c.545 0 1-.455 1-1v-2c0-.545-.455-1-1-1h-2V6.387A2.391 2.391 0 0 0 25.617 4h-4.234zM19.5 6.998c.429 0 .858.116 1.244.346.624.37.98 1.024 1.125 1.74H17.13c.145-.716.502-1.37 1.126-1.74.386-.23.815-.346 1.244-.346zM17 12v1h1v-1h-1zm2 0v1h1v-1h-1zm2 0v1h1v-1h-1zM9.484 13.904c.556 0 1.05.383 1.202.963a.5.5 0 0 0 .673.336c.147-.06.3-.092.454-.092.541 0 .987.326 1.167.889H3.047c.184-.864.914-1.492 1.781-1.492.572 0 1.102.28 1.445.75a.5.5 0 0 0 .022.03.5.5 0 0 0 .887.105.997.997 0 0 1 .754-.422.5.5 0 0 0 .474-.407c.218-.397.614-.66 1.074-.66zM17 14v1h1v-1h-1zm2 0v1h1v-1h-1zm2 0v1h1v-1h-1zM2 17h28v2H2v-2zm1 3h26v4c0 1.67-1.33 3-3 3H6c-1.67 0-3-1.33-3-3v-4z'
														color='#000'
														enable-background='accumulate'
														font-family='sans-serif'
														font-weight='400'
														overflow='visible'
													/>
												</svg>
												<p>Full Bath / Shower</p>
											</div>
										</div>

										<div className='div2'>
											<div>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													data-name='Layer 1'
													viewBox='0 0 128 128'
												>
													<path d='M112 90a2.0001 2.0001 0 0 0-2 2v6a2 2 0 0 0 4 0V92A2.0001 2.0001 0 0 0 112 90zM18 90a2.0001 2.0001 0 0 0-2 2v6a2 2 0 0 0 4 0V92A2.0001 2.0001 0 0 0 18 90z' />
													<rect width='6' height='4' x='61' y='82' />
													<path d='M124 116h-2V74a3.99887 3.99887 0 0 0-4-4H12a3.99887 3.99887 0 0 0-4 4v42H4a3.99887 3.99887 0 0 0-4 4v4a3.99891 3.99891 0 0 0 4 4H124a3.99891 3.99891 0 0 0 4-4v-4A3.99887 3.99887 0 0 0 124 116zM88 74h30v42H88zM48 82a3.99887 3.99887 0 0 1 4-4H76a3.99887 3.99887 0 0 1 4 4v26a3.99891 3.99891 0 0 1-4 4H52a3.99891 3.99891 0 0 1-4-4zM12 74H40v42H12zm112 50H4v-4H124zM19 66H31a6.0135 6.0135 0 0 0-3.33-5.37V52.08a8.92 8.92 0 0 0-17.84 0v4.67a2 2 0 0 0 4 0V52.08a4.92 4.92 0 0 1 9.84 0v8.07A6.01363 6.01363 0 0 0 19 66zM52 56a2.00587 2.00587 0 0 0-2-2H48.75l2.43-5.75a1.9985 1.9985 0 0 0-3.68-1.56L44.41 54H44V47a2 2 0 0 0-4 0v7H38a2.00587 2.00587 0 0 0-2 2V66H52zM61 66h56a3.99887 3.99887 0 0 0-4-4H65A3.99887 3.99887 0 0 0 61 66z' />
													<path d='M76 82H71v6a2.0001 2.0001 0 0 1-2 2H59a2.0001 2.0001 0 0 1-2-2V82H52v26H76zM71.5 60a2 2 0 0 0 0-4h-4a2 2 0 0 0 0 4zM83.5 60a2 2 0 0 0 0-4h-4a2 2 0 0 0 0 4zM98.5 60a2 2 0 0 0 0-4h-4a2 2 0 0 0 0 4zM110.5 60a2 2 0 0 0 0-4h-4a2 2 0 0 0 0 4zM126 0H38V26H71a2.00591 2.00591 0 0 0 2-2c0-.04-.01-.08-.01-.12 0-.05.01-.09.01-.13V4h4V29.06a3.9725 3.9725 0 0 0-2.55 1.41l-6.55 8A4.00535 4.00535 0 0 0 71 45h36a4.00535 4.00535 0 0 0 3.1-6.53l-6.55-8A3.9725 3.9725 0 0 0 101 29.06V4h4V23.75a2.00591 2.00591 0 0 0 2 2h19a2.00591 2.00591 0 0 0 2-2V2A2.00587 2.00587 0 0 0 126 0zM56 15H52a2 2 0 0 1 0-4h4a2 2 0 0 1 0 4zM97 29H81V4H97zM2 26H34V0H2A2.00587 2.00587 0 0 0 0 2V24A2.00591 2.00591 0 0 0 2 26zM17 11h4a2 2 0 0 1 0 4H17a2 2 0 0 1 0-4z' />
												</svg>
												<p>Kitchenette & Bar Fridge</p>
											</div>
											<div>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													enable-background='new 0 0 48 48'
													viewBox='0 0 48 48'
												>
													<path d='M10.61 7.11c-.5-.25-1.09-.05-1.34.45-.14.27-1.28 2.69.19 4.15.34.34.04 1.39-.19 1.85-.25.49-.05 1.09.45 1.34.14.07.3.11.45.11.37 0 .72-.2.9-.55.14-.27 1.28-2.69-.19-4.15-.34-.34-.04-1.39.19-1.85C11.31 7.95 11.11 7.35 10.61 7.11zM21.17 7.11c-.5-.25-1.09-.05-1.34.45-.14.27-1.28 2.69.19 4.15.34.34.04 1.39-.19 1.85-.25.49-.05 1.09.45 1.34.14.07.3.11.45.11.37 0 .72-.2.9-.55.14-.27 1.28-2.69-.19-4.15-.34-.34-.04-1.39.19-1.85C21.86 7.95 21.66 7.35 21.17 7.11zM31.5 7.11c-.5-.25-1.1-.05-1.34.45-.14.27-1.28 2.69.19 4.15.34.34.04 1.39-.19 1.85-.25.49-.05 1.09.45 1.34.14.07.3.11.45.11.37 0 .72-.2.9-.55.14-.27 1.28-2.69-.19-4.15-.34-.34-.04-1.39.19-1.85C32.2 7.95 32 7.35 31.5 7.11zM5.5 19v10c0 4.63 2.09 8.93 5.73 11.79.04.03.1.05.15.08.04.02.07.05.11.06.11.04.23.07.36.07h17.3c.12 0 .24-.03.36-.07.04-.02.07-.04.11-.06.05-.03.1-.05.15-.08 3.38-2.65 5.4-6.54 5.68-10.79h2.06c2.76 0 5-2.24 5-5s-2.24-5-5-5h-2v-1c0-.55-.45-1-1-1h-28C5.95 18 5.5 18.45 5.5 19zM35.5 22h2c1.65 0 3 1.35 3 3s-1.35 3-3 3h-2V22zM14.5 23.62V27h-2v-3.38l1-.5L14.5 23.62zM7.5 20h5v1.38l-1.45.72c-.34.17-.55.52-.55.89v5c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-5c0-.38-.21-.72-.55-.89l-1.45-.72V20h19v1 8c0 3.9-1.71 7.52-4.7 10H12.2c-2.99-2.48-4.7-6.1-4.7-10V20z' />
												</svg>
												<p>Tea & Coffee</p>
											</div>
											<div>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													width='64'
													height='64'
													enable-background='new'
													viewBox='0 0 64 64'
												>
													<path
														d='m59 56c0.55226-5.5e-5 0.99994-0.44774 1-1 0-6.6156-5.3844-12-12-12h-4.2207c2.6001-2.5432 4.2207-6.0838 4.2207-10 0-6.3056-3.0812-8.998-5.5254-11.564-2.4442-2.5664-4.4518-5.0321-3.4824-12.303 0.080342-0.60009-0.38675-1.1334-0.99219-1.1328-4.147 0-8.5269 3.2484-11.994 7.9023-3.4672 4.6539-6.0059 10.825-6.0059 17.098 0 3.9162 1.6206 7.4568 4.2207 10h-8.2207c-6.6156 0-12 5.3844-12 12 5.52e-5 0.55226 0.44774 0.99994 1 1zm-22.037-45.789c-0.53994 6.7104 1.6763 10.098 4.0625 12.604 2.5558 2.6836 4.9746 4.4911 4.9746 10.186 0 4.3818-2.3434 8.1946-5.8398 10.289 0.53184-0.98991 0.83984-2.1175 0.83984-3.3164 0-2.0078-0.91113-4.7523-2.1445-7.1875-0.6167-1.2176-1.3154-2.3361-2.0859-3.2031-0.77057-0.86706-1.6313-1.582-2.7695-1.582s-1.999 0.71497-2.7695 1.582c-0.77057 0.86706-1.4692 1.9855-2.0859 3.2031-1.2334 2.4352-2.1445 5.1797-2.1445 7.1875 0 1.2012 0.31197 2.3291 0.8457 3.3203-3.4998-2.0937-5.8457-5.9087-5.8457-10.293 0-5.7272 2.3715-11.556 5.6094-15.902 2.8948-3.8856 6.4559-6.3771 9.3535-6.8867zm-2.9629 19.789c0.14747 0 0.67989 0.24009 1.2754 0.91016 0.5955 0.67007 1.235 1.67 1.7969 2.7793 1.1237 2.2187 1.9277 4.962 1.9277 6.2832 0 2.6139-1.9545 4.7404-4.4785 5-0.0026 1.13e-4 -0.0052 0.0018-0.0078 2e-3 -0.16854 0.017014-0.34051 0.025344-0.51368 0.025344-2.7708 0-5-2.2362-5-5.0273 0-1.3212 0.80399-4.0645 1.9277-6.2832 0.56187-1.1093 1.2014-2.1092 1.7969-2.7793 0.5955-0.67007 1.1279-0.91016 1.2754-0.91016zm-18 15c5.1796 0 9.2757 3.9619 9.7988 9h-3.8906c-0.48028-2.8283-2.9478-5-5.9082-5s-5.4279 2.1717-5.9082 5h-3.8906c0.52312-5.0381 4.6192-9 9.7988-9zm6.6191 0h4.207c2.1012 1.261 4.5497 2 7.1738 2s5.0726-0.73899 7.1738-2h6.8262c5.1796 0 9.2757 3.9619 9.7988 9h-9.8496c-0.10687-1.2909-0.40886-2.5282-0.89258-3.6719-0.15778-0.37186-0.5238-0.61227-0.92774-0.60938-0.1315 6.18e-4 -0.26159 0.02716-0.38281 0.07813-0.50857 0.21522-0.74641 0.80195-0.53125 1.3105 0.38218 0.90358 0.63556 1.875 0.73633 2.8926h-18.002c-0.31217-3.754-2.3529-7.0228-5.3301-9zm-6.6191 6c1.8657 0 3.3514 1.2819 3.8008 3h-7.6016c0.4494-1.7181 1.9351-3 3.8008-3z'
														color='#000'
													/>
												</svg>
												<p>Outdoor Firepit</p>
											</div>
											<div>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													enable-background='new 0 0 512 275'
													viewBox='0 0 512 275'
												>
													<path d='M415.8,82.6c-11.2,0-22.3,2-32.9,5.8l-33.4-73.1h28c4.2-0.2,7.5-3.7,7.3-7.9c-0.1-4-3.3-7.2-7.3-7.3h-73.3c-4.2,0.2-7.5,3.7-7.3,7.9c0.1,4,3.3,7.2,7.3,7.3h28.6l6.1,13.3L194.6,75.1l-11.7-31.3h28c4.2,0,7.6-3.4,7.6-7.6c0-4.2-3.4-7.6-7.6-7.6h-72.2c-4.2,0-7.6,3.4-7.6,7.6c0,4.2,3.4,7.6,7.6,7.6h28l14.4,38.8l-23.3,22.3C117,70.9,56.4,76.4,22.4,117.2S-6.1,218.7,34.7,252.7s101.4,28.5,135.4-12.3c10.4-12.5,17.5-27.5,20.6-43.5l16.5,1c2.6,9.6,10,17.2,19.6,19.9v9.8h-4.2c-4.2,0-7.6,3.4-7.6,7.6c0,4.2,3.4,7.6,7.6,7.6c0,0,0,0,0,0h23.6c4.2,0,7.6-3.4,7.6-7.6c0-4.2-3.4-7.6-7.6-7.6c0,0,0,0,0,0H242v-9.8c15-4.2,23.7-19.7,19.5-34.7c-1.9-6.8-6.3-12.6-12.2-16.3l98.2-119.4l21.6,47.3c-46.4,25.8-63.1,84.4-37.3,130.8c25.8,46.4,84.4,63.1,130.8,37.3C509,237,525.7,178.4,499.9,132C482.9,101.5,450.7,82.5,415.8,82.6L415.8,82.6z M227.4,163.4l-27.5-74L327,48.3l-93.9,114.2C231.2,162.6,229.3,162.9,227.4,163.4L227.4,163.4z M177.1,180.8l-72-4.4l52.5-50.3c12.6,14.6,19.5,33.3,19.5,52.6C177.2,179.5,177.2,180.1,177.1,180.8L177.1,180.8z M96.2,259.8c-44.7,0.1-81-36.2-81.1-80.9s36.2-81,80.9-81.1c18.4,0,36.4,6.3,50.8,17.8l-64.7,62c0,0-0.1,0.1-0.1,0.1c-0.1,0.1-0.2,0.2-0.3,0.3l-0.2,0.2c-0.1,0.1-0.2,0.2-0.3,0.4l-0.2,0.3l-0.2,0.4l-0.2,0.3c-0.1,0.1-0.1,0.2-0.2,0.4s-0.1,0.2-0.1,0.3s-0.1,0.2-0.1,0.4s-0.1,0.2-0.1,0.3s-0.1,0.2-0.1,0.4s-0.1,0.2-0.1,0.4l-0.1,0.4c0,0.1,0,0.3,0,0.4c0,0.1,0,0.1,0,0.2v0.1c0,0.1,0,0.3,0,0.4c0,0.1,0,0.3,0,0.4s0,0.2,0,0.4s0,0.3,0,0.4s0,0.2,0.1,0.3s0,0.3,0.1,0.4l0.1,0.3c0,0.1,0.1,0.2,0.1,0.4l0.1,0.3l0.2,0.3l0.2,0.3c0.1,0.1,0.1,0.2,0.2,0.3c0.1,0.1,0.1,0.2,0.2,0.3c0.1,0.1,0.1,0.2,0.2,0.3c0.1,0.1,0.1,0.2,0.2,0.3l0.3,0.3l0.1,0.1c0.1,0,0.1,0.1,0.1,0.1l0.3,0.3l0.3,0.2l0.3,0.2l0.3,0.2l0.3,0.2l0.3,0.2l0.3,0.2l0.3,0.1l0.4,0.1l0.3,0.1l0.4,0.1l0.4,0.1l0.4,0.1h0.4h0.1l88.5,5.4C167.2,233.2,134.3,259.7,96.2,259.8z M168.7,115.6l18.2-17.5l27.2,73.1c-3.1,3.2-5.4,7.2-6.6,11.4l-15.1-0.9c0-1,0.1-2,0.1-3C192.4,155.5,184,133.1,168.7,115.6L168.7,115.6z M234.5,203.6c-7.2,0-13-5.8-13-13s5.8-13,13-13s13,5.8,13,13l0,0C247.4,197.8,241.6,203.6,234.5,203.6L234.5,203.6L234.5,203.6z M415.8,259.8c-44.7,0-81-36.3-80.9-81.1c0-28.9,15.5-55.6,40.6-70.1l33.4,73.3c1.2,2.7,3.9,4.4,6.9,4.4c1.1,0,2.2-0.2,3.1-0.7c3.8-1.7,5.5-6.2,3.8-10.1l-33.5-73.4c42.3-14.7,88.4,7.7,103.1,49.9c14.7,42.3-7.7,88.4-49.9,103.1C433.9,258.2,424.9,259.8,415.8,259.8z' />
												</svg>
												<p>Townie Bikes</p>
											</div>
											<div className='last'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													viewBox='0 0 448 512'
												>
													<path d='M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM192 256h48c17.7 0 32-14.3 32-32s-14.3-32-32-32H192v64zm48 64H192v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V288 168c0-22.1 17.9-40 40-40h72c53 0 96 43 96 96s-43 96-96 96z' />
												</svg>
												<p>Free Off Street Parking</p>
											</div>
										</div>
									</div>
									<div className='button '>
										<a>Our Rates</a>
									</div>
								</div>

								<div className='elk'></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>
				<div className='h2-back'>
					<h2 className='container'>Reviews</h2>
				</div>
				<div className='reviews'>
					<Reviews />
				</div>
			</div>
		</div>
	);
}

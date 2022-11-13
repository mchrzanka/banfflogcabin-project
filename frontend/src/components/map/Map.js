import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
	width: '100'
};

const center = {
	lat: 51.16851,
	lng: -115.56585
};

function MyComponent() {
	return (
		<LoadScript
			googleMapsApiKey="AIzaSyDsNJ1kSAhoGnRHAGE9kd1F9MMpatsBNR4"
		>
			<GoogleMap
				mapContainerStyle={containerStyle}
				center={center}
				zoom={15}
			>
				{ /* Child components, such as markers, info windows, etc. */}
				<></>
			</GoogleMap>
		</LoadScript>
	)
}

export default React.memo(MyComponent)
import { useEffect, useState } from 'react';

//get data from strapi
const useFetch = (url) => {
	//for the data that we're going to get back from the fetch request
	const [data, setData] = useState([]); //make sure useState is an array as strapi changed arrays into objects.
	//if we get an error back from strapi
	const [error, setError] = useState([]);
	//when we start to use the hook, it will ititialize the loading state to be true and then once we've finished fetching the data we will make it false.
	const [loading, setLoading] = useState(true);

	useEffect(
		() => {
			const fetchData = async () => { //THINK URL GOES IN HERE TOO
				setLoading(true);

				try {
					//we are going to try to fetch the data from the passed in url (the endpoint). Fetch() is an api.
					const res = await fetch(url);
					//this is how we store the data, in a javascript object
					const json = await res.json();

					setData(json);
					setLoading(false);
				} catch (error) {
					setError(error);
					setLoading(false);
				}
			};

			fetchData();
		},
		[], //THINK URL GOES IN HERE
		{ url }
	);

	return { loading, error, data };
};

export default useFetch;

import React from 'react'

function usePrice() {
const { loading, error, data } = useFetch(
    'http://147.182.207.198:1337/api/bookings'
);

if (loading) {
    return <p>Loading...</p>;
} else if (error === []) {
    return <p>Error</p>;
}


  return (
    <div>usePrice</div>
  )
}

export default usePrice
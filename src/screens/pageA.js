import React, { useState, useEffect } from 'react';


const baseURL = 'https://ftx.com/api/markets';

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://ftx.com/api/markets", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

function PageA() {
  const [ test, setTest ] = useState(null)

  useEffect(() => {
    
    console.log(test)
  }, [])


	return(
		<div className='container mx-auto'>
      <h1>Hello crypto</h1>
      <button className='text-white text-3xl font-semibold py-3 px-6 rounded-lg shadow-lg bg-green-400 hover:bg-green-600'>
        Refresh
      </button >
  	</div>
	)
}

export default PageA
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const baseURL = 'https://ftx.com/api/markets';
const instance = axios.create({
  baseURL: 'https://ftx.com/api/markets',
  timeout: 5000,
  withCredentials: false,
  crossorigin: true,
  headers: {
    crossorigin: true,
    crossDomain: true,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
  }
})

function PageA() {
  const [ test, setTest ] = useState(null)

  useEffect(() => {
    instance.get().then((response) => {
      setTest(response.data)
    })
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
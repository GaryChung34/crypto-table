import React, { useState, useEffect } from 'react';
import axios from 'axios';


function PageA() {
  const [ test, setTest ] = useState(null)

  useEffect(() => {
    axios.get('/api/markets').then((response) => {
      setTest(response.data)
      console.log(test)
    })
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
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function PageB() {
  const [ test, setTest ] = useState(null)

  useEffect(() => {
    axios.get('/api/markets').then((response) => {
      setTest(response.data)
      console.log(test)
    })
  }, [])


	return(
		<div className='container mx-auto'>
      <h1 className='p-8 mx-auto text-center'>Page B - Future Market</h1>
      <button className='text-white text-3xl font-semibold py-3 px-6 m-5 ml-1/6 rounded-lg shadow-lg bg-red-400 hover:bg-red-600'>
        Refresh
      </button>

      <table className='w-4/5 mx-auto'>
        <tr>
          <th className='bg-red-600'>Asset/Contract Name</th>
          <th className='bg-red-600'>bid</th>
          <th className='bg-red-600'>Ask</th>
          <th className='bg-red-600'>Price</th>
          <th className='bg-red-600'>Underlying Assist</th>
          <th className='bg-red-600'>Volume in USD for last 24 hours</th>
        </tr>
        <tr>
          <td>abc</td>
          <td>abc</td>
          <td>abc</td>
          <td>abc</td>
          <td>abc</td>
          <td>abc</td>
        </tr>
        <tr>
          <td>abc</td>
          <td>abc</td>
          <td>abc</td>
          <td>abc</td>
          <td>abc</td>
          <td>abc</td>
        </tr>
      </table>
  	</div>
	)
}

export default PageB
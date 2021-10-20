import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TableRender from '../components/eachData.js';


function PageB() {
  const [ result, setResult ] = useState([])

  function fetchData() {
    let future;
    let temp;

    axios.get('/api/markets')
      .then((response) => {
        console.log(response.data)

        future = response.data.result.filter(trade => trade.type === 'future')
        temp = future.filter(trade => {
          if((trade.underlying === 'BTC' || trade.underlying === 'ETH') && trade.name.search('PERP') !== -1)
            return true
        })

      setResult(temp)
    })
  }

  useEffect(() => {
    const firstFetch = setTimeout(fetchData, 0)
    const updateLoop = setInterval(fetchData, 10000)

    return () => {
      clearTimeout(firstFetch)
      clearInterval(updateLoop)
    }
  }, [])


	return(
		<div className='container mx-auto'>
      <h1 className='p-8 mx-auto text-center'>Page B - Future Market</h1>

      <table className='w-4/5 mx-auto'>
        <thead>
          <tr>
            <th className='bg-red-600'>Asset/Contract Name</th>
            <th className='bg-red-600 price'>bid</th>
            <th className='bg-red-600 price'>Ask</th>
            <th className='bg-red-600 price'>Price</th>
            <th className='bg-red-600 price'>Underlying Assist</th>
            <th className='bg-red-600 price'>Volume in USD (last 24 hr)</th>
          </tr>
        </thead>

        <tbody>
          <TableRender result={result} />
        </tbody>
      </table>
  	</div>
	)
}

export default PageB
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
      <h1 className='pt-16 pb-4 pl-4 mx-auto'>Future Market</h1>

      <table className='w-full mx-auto'>
        <thead>
          <tr>
            <th className='rounded-tl-2xl text-left pl-5'>Asset/Contract Name</th>
            <th className='price'>bid</th>
            <th className='price'>Ask</th>
            <th className='price'>Price</th>
            <th className='price'>Assist</th>
            <th className='rounded-tr-2xl pr-5'>Volume</th>
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
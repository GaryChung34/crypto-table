import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../components/table.js';


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
      <h1 className='text-gray-700 pt-16 pb-4 pl-4 mx-auto'>Future Market</h1>
      <Table result={result} />
  	</div>
	)
}

export default PageB
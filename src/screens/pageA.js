import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../components/table.js';


function PageA() {
	const [ result, setResult ] = useState([])

	function fetchData() {
    let future;
    let temp;

    axios.get('/api/markets')
      .then((response) => {
        future = response.data.result.filter(trade => trade.type === 'spot')
        temp = future.filter(trade => {
          if((trade.baseCurrency === 'BTC' || trade.baseCurrency === 'ETH') && trade.quoteCurrency === 'USDT')
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
			<h1 className='pt-16 pb-4 pl-4 mx-auto text-gray-700'>Spot Market</h1>
			<Table result={result} />
		</div>
	)
}

export default PageA
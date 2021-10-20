import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TableRender from '../components/eachData.js';


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

			<table className='w-full mx-auto'>
				<thead>
					<tr>
						<th className='rounded-tl-2xl text-left pl-5'>Asset/Contract Name</th>
						<th className='price'>bid</th>
						<th className='price'>Ask</th>
						<th className='price'>Price</th>
						<th className='price'>Underlying Assist</th>
						<th className='w-1/4 rounded-tr-2xl pr-5'>
							Volume in USD for last 24 hours
						</th>
					</tr>
				</thead>

				<tbody>
					<TableRender result={result} />
				</tbody>
			</table>
		</div>
	)
}

export default PageA
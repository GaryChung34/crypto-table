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
        console.log(response.data)

        future = response.data.result.filter(trade => trade.type === 'spot')
        temp = future.filter(trade => {
          if((trade.baseCurrency === 'BTC' || trade.baseCurrency === 'ETH') && trade.quoteCurrency === 'USDT')
            return true
        })

      setResult(temp)
    })
	}

	useEffect(() => {
    fetchData()
    const updateLoop = setInterval(fetchData, 10000)

    return () => {
    	clearInterval(updateLoop)
    }
	}, [])


	return(
		<div className='container mx-auto'>
			<h1 className='p-8 mx-auto text-center'>Page A - Spot Market</h1>

			<table className='w-4/5 mx-auto'>
				<thead>
					<tr>
						<th className='bg-green-600 '>Asset/Contract Name</th>
						<th className='bg-green-600 price'>bid</th>
						<th className='bg-green-600 price'>Ask</th>
						<th className='bg-green-600 price'>Price</th>
						<th className='bg-green-600 price'>Underlying Assist</th>
						<th className='bg-green-600 price whitespace-pre-line'>
							Volume in USD
							(last 24hr)
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
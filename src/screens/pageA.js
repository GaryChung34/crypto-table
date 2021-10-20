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
						<th className='rounded-tl-2xl text-left pl-5'>Asset/Contract Name</th>
						<th className='price'>bid</th>
						<th className='price'>Ask</th>
						<th className='price'>Price</th>
						<th className='bprice'>Underlying Assist</th>
						<th className='price whitespace-pre-line rounded-tr-2xl pr-5'>
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
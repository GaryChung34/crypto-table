import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TableRender from '../components/eachData.js';


function PageA() {
	const [ test, setTest ] = useState(null)
	const [ result, setResult ] = useState([
		{
      "name": "1INCH-PERP",
      "enabled": true,
      "postOnly": false,
      "priceIncrement": 0.0001,
      "sizeIncrement": 1.0,
      "minProvideSize": 1.0,
      "last": 3.5727,
      "bid": 3.5723,
      "ask": 3.5724,
      "price": 3.5724,
      "type": "future",
      "baseCurrency": null,
      "quoteCurrency": null,
      "underlying": "1INCH",
      "restricted": false,
      "highLeverageFeeExempt": false,
      "change1h": 0.010037038084198027,
      "change24h": 0.04602951510892481,
      "changeBod": 0.04109109984262983,
      "quoteVolume24h": 26625842.6164,
      "volumeUsd24h": 26625842.6164
    },
    {
      "name": "1INCH-1231",
      "enabled": true,
      "postOnly": false,
      "priceIncrement": 0.0001,
      "sizeIncrement": 1.0,
      "minProvideSize": 1.0,
      "last": 3.6417,
      "bid": 3.6887,
      "ask": 3.7095,
      "price": 3.6887,
      "type": "future",
      "baseCurrency": null,
      "quoteCurrency": null,
      "underlying": "1INCH",
      "restricted": false,
      "highLeverageFeeExempt": false,
      "change1h": 0.009358325352305377,
      "change24h": 0.04436579841449604,
      "changeBod": 0.037113054235667894,
      "quoteVolume24h": 33529.1791,
      "volumeUsd24h": 33529.1791
    }
	])

	useEffect(() => {
		axios.get('/api/markets').then((response) => {
			setTest(response.data)
			console.log(test)
		})
	}, [])

	function handleClick() {
			const spot = test.result.filter(trade => trade.type === 'spot')
			console.log(spot)
			const result = spot.filter(trade => {
				if((trade.baseCurrency === 'BTC' || trade.baseCurrency === 'ETH') && trade.quoteCurrency === 'USDT')
					return true
			})

			console.log(result)
			setResult(result)
	}


	return(
		<div className='container mx-auto'>
			<h1 className='p-8 mx-auto text-center'>Page A - Spot Market</h1>
			<button className='text-white text-3xl font-semibold py-3 px-6 m-5 rounded-lg shadow-lg bg-green-400 hover:bg-green-600'
				onClick={handleClick}>
				Refresh
			</button >
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
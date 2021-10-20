import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';


function Table({ result }) {

	// add comma in every three digit
	function moneyCommas(x) {
    	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	// deduce crypto icon
	function Icon({ trade }) {
		let icon;
		let iconType = '';

		if(trade.type==='spot') {
			iconType = trade.baseCurrency
		}else if(trade.type==='future') {
			iconType = trade.underlying
		}

		switch(iconType) {
			case 'BTC':
				icon = <FontAwesomeIcon icon={faBitcoin} className='text-2xl'/>
				break

			case 'ETH':
				icon = <FontAwesomeIcon icon={faEthereum} className='text-2xl'/>
				break

			default:
				icon = <></>
				break
		}
		return icon
	}

	// iterate each record 
	const data = result.map((trade, index) => (
		<tr key={index}>
			{
				index === result.length-1 ?
				<td className='rounded-bl-2xl text-left pl-5'>
					<Icon trade={trade} />
					&nbsp;{trade.name}
				</td> :
				<td className='text-left pl-5'>
					<Icon trade={trade} />
					&nbsp;{trade.name}
				</td>
			}

			<td>$ {moneyCommas(trade.bid)}</td>
			<td>$ {moneyCommas(trade.ask)}</td>
			<td>$ {moneyCommas(trade.price)}</td>

			{trade.type === 'future' ? <td>{trade.underlying}</td> : <td>{trade.baseCurrency}</td>}

			{
				index === result.length-1 ?
				<td className='rounded-br-2xl pr-5'>$ {moneyCommas(Math.round(trade.volumeUsd24h))}</td> :
				<td className='pr-5'>$ {moneyCommas(Math.round(trade.volumeUsd24h))}</td>
			}
		</tr>
	))
	
	// render final table
	return (
		<table className='w-full mx-auto'>
			<thead>
				<tr>
					<th className='rounded-tl-2xl text-left pl-5'>Asset/Contract Name</th>
					<th className='price'>bid</th>
					<th className='price'>Ask</th>
					<th className='price'>Price</th>
					<th className='w-1/6'>Underlying Assist</th>
					<th className='w-1/4 rounded-tr-2xl pr-5'>
						Volume in USD for last 24 hours
					</th>
				</tr>
			</thead>

			<tbody>
				{data}
			</tbody>
		</table>
	)
}

export default Table
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';


function TableRender({ result }) {
	function moneyCommas(x) {
    	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	function Icon({ type }) {
		let icon
		switch(type) {
			case 'BTC':
				icon = <FontAwesomeIcon icon={faBitcoin} className='text-2xl'/>

			case 'ETH':
				icon = <FontAwesomeIcon icon={faEthereum} className='text-2xl'/>

			default:
				icon = <></>
		}

		return icon
	}

	const data = result.map((trade, index) => (
		<tr key={trade.name}>
			{
				index === result.length-1 ?
				<td className='rounded-bl-2xl text-left pl-5'>
					<Icon type={'BTC'} />
					&nbsp;{trade.name}
				</td> :
				<td className='text-left pl-5'>
					<Icon type={trade.baseCurrency} />
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
	
	return data
}

export default TableRender
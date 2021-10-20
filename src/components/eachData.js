import React from 'react'


function TableRender({ result }) {
	const data = result.map((trade, index) => (
		<tr key={trade.name}>
			{
				index === result.length-1 ?
				<td className='rounded-bl-2xl text-left pl-5'>{trade.name}</td> :
				<td className='text-left pl-5'>{trade.name}</td>
			}
			<td>${trade.bid}</td>
			<td>${trade.ask}</td>
			<td>${trade.price}</td>
			{trade.type === 'future' ? <td>{trade.underlying}</td> : <td>{trade.baseCurrency}</td>}
			{
				index === result.length-1 ?
				<td className='rounded-br-2xl pr-5'>${trade.volumeUsd24h}</td> :
				<td className='pr-5'>${trade.volumeUsd24h}</td>
			}
		</tr>
	))
	
	return data
}

export default TableRender
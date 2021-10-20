import React from 'react'


function TableRender({ result }) {
	const data = result.map(trade => (
		<tr key={trade.name}>
			<td>{trade.name}</td>
			<td>${trade.bid}</td>
			<td>${trade.ask}</td>
			<td>${trade.price}</td>
			{trade.type === 'future' ? <td>{trade.underlying}</td> : <td>{trade.baseCurrency}</td>}
			<td>${trade.volumeUsd24h}</td>
		</tr>
	))
	
	return data
}

export default TableRender
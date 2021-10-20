import React, { useState, useEffect } from 'react';
import axios from 'axios';


function PageA() {
	const [ test, setTest ] = useState(null)

	useEffect(() => {
		axios.get('/api/markets').then((response) => {
			setTest(response.data)
			console.log(test)
		})
	}, [])
	

	return(
		<div className='container mx-auto'>
			<h1 className='p-8 mx-auto text-center'>Page A - Spot Market</h1>
			<button className='text-white text-3xl font-semibold py-3 px-6 m-5 rounded-lg shadow-lg bg-green-400 hover:bg-green-600'>
				Refresh
			</button >
			<table className='w-4/5 mx-auto'>
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
				<tr>
					<td className='text-center'>abc</td>
					<td>abc</td>
					<td>abc</td>
					<td>abc</td>
					<td>abc</td>
					<td>abc</td>
				</tr>
				<tr>
					<td className='text-center'>abc</td>
					<td>abc</td>
					<td>abc</td>
					<td>abc</td>
					<td>abc</td>
					<td>abc</td>
				</tr>
				<tr>
					<td className='text-center'>abc</td>
					<td>abc</td>
					<td>abc</td>
					<td>abc</td>
					<td>abc</td>
					<td>abc</td>
				</tr>
				<tr>
					<td className='text-center text-xl font-bold'>abc</td>
					<td>abc</td>
					<td>abc</td>
					<td>abc</td>
					<td>abc</td>
					<td>abc</td>
				</tr>
			</table>
		</div>
	)
}

export default PageA
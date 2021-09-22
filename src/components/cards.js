import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'
import fetchAPOD from '../APIS/APOD'
import ApodCard from './apodCard'

const Cards = ({ dates }) => {
	const [data, setData] = useState([])

	const startDate = format(dates[0], 'yyyy-MM-dd')
	const endDate = format(dates[1], 'yyyy-MM-dd')

	useEffect(() => {
		fetchAPOD(startDate, endDate).then(res => {
			setData(res.data)
			console.log(res.data)
		})
	}, [dates])

	return (
		<StyledCards>
			{data.map(potd => (
				<ApodCard
					key={potd.date}
					date={potd.date}
					title={potd.title}
					explanation={potd.explanation}
					url={potd.hdurl}
				/>
			))}
		</StyledCards>
	)
}

const StyledCards = styled.div`
	padding: 3rem;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	color: red;
`

export default Cards

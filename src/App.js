import React, { useState } from 'react'
import { DateRangePicker } from 'rsuite'
import { subDays } from 'date-fns'
import Cards from './components/cards'
import 'rsuite/dist/styles/rsuite-default.css'
import './App.css'

const { afterToday, allowedMaxDays, combine } = DateRangePicker

const defaultState = {
	value: [subDays(new Date(), 6), new Date()]
}

function App() {
	const [dates, setDates] = useState({
		value: [subDays(new Date(), 6), new Date()]
	})

	return (
		<>
			<div className='App-header'>
				<h1>Spacestagram </h1>
				<small>
					Brought to you by NASA's Astronomy Photo of the day (APOD) API
				</small>
				<DateRangePicker
					value={dates.value}
					onClean={() => {
						setDates(defaultState)
					}}
					onChange={value => {
						setDates({ value })
					}}
					disabledDate={combine(allowedMaxDays(14), afterToday())}
				/>
			</div>
			<div className='cards-container'>
				<Cards dates={dates.value} />
			</div>
		</>
	)
}

export default App

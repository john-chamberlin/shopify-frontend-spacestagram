import axios from 'axios'

const fetchAPOD = (start, end) => {
	return new Promise((resolve, reject) => {
		axios
			.get(
				`https://api.nasa.gov/planetary/apod?api_key=WLXrG8EUe7qufcpUKX1d6i4reuNnwohRpTMcAstc&start_date=${start}&end_date=${end}`
			)
			.then(res => {
				resolve(res)
			})
			.catch(err => {
				reject(err)
			})
	})
}

export default fetchAPOD

import React, { useEffect } from 'react'
import FavIcon from '@mui/icons-material/Favorite'
import FavIconUnfilled from '@mui/icons-material/FavoriteBorder'

const Favorite = ({ isFavorite }) => {
	useEffect(() => {}, [isFavorite])

	if (isFavorite === true) {
		return (
			<FavIcon
				sx={{
					color: '#E53935'
				}}
			/>
		)
	} else {
		return <FavIconUnfilled />
	}
}

export default Favorite

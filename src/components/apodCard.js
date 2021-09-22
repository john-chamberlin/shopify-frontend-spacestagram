import React, { useState } from 'react'
import {
	Card,
	Popover,
	CardHeader,
	CardMedia,
	IconButton,
	Typography,
	Alert
} from '@mui/material'
// import Card from '@mui/material/Card'
// import Popover from '@mui/material/Popover'
// import CardHeader from '@mui/material/CardHeader'
// import CardMedia from '@mui/material/CardMedia'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Favorite from './favorite'
// import IconButton from '@mui/material/IconButton'
// import Typography from '@mui/material/Typography'
import ShareIcon from '@mui/icons-material/Share'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
// import Alert from '@mui/material/Alert'
import styled from 'styled-components'

export default function ApodCard({ title, date, url, explanation }) {
	const [anchorEl, setAnchorEl] = useState(null)
	const [favorite, setFavorite] = useState(false)
	const [isCopied, setIsCopied] = useState(false)

	const handleExpandClick = evt => {
		setAnchorEl(evt.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const handleFavoriteClick = () => {
		setFavorite(!favorite)
	}

	const handleCopy = () => {
		setIsCopied(true)
	}

	const open = Boolean(anchorEl)
	const id = open ? 'simple-popover' : undefined

	return (
		<StyledCard>
			<Card
				sx={{
					width: 350,
					height: 540,
					borderRadius: 4
				}}
			>
				<CardHeader
					sx={{ height: '6rem', padding: 2 }}
					title={title}
					subheader={date}
					action={
						<IconButton onClick={handleExpandClick}>
							<ExpandMoreIcon />
						</IconButton>
					}
				/>
				<Popover
					id={id}
					open={open}
					anchorEl={anchorEl}
					onClose={handleClose}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'left'
					}}
				>
					<Typography sx={{ p: 2 }} paragraph>
						{explanation}
					</Typography>
				</Popover>
				<CardMedia
					component='img'
					height='400'
					image={url}
					alt={`NASA APOD For ${date}`}
					sx={{
						p: 1,
						borderRadius: 4
					}}
				/>
				{isCopied ? (
					<Alert
						onClose={() => {
							setIsCopied(false)
						}}
						severity='success'
						color='info'
					>
						Image URL copied to clipboard!
					</Alert>
				) : null}
				<div className='actions-container'>
					<IconButton
						aria-label='add to favorites'
						onClick={handleFavoriteClick}
					>
						<Favorite isFavorite={favorite} />
					</IconButton>
					<CopyToClipboard text={url} onCopy={handleCopy}>
						<IconButton aria-label='share'>
							<ShareIcon />
						</IconButton>
					</CopyToClipboard>
				</div>
			</Card>
		</StyledCard>
	)
}

const StyledCard = styled.div`
	margin-bottom: 4rem;

	.actions-container {
		/* border: 1px solid black; */
	}
`

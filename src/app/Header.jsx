'use client'
import React from 'react'
import HeaderMenu from './HeaderMenu'

function Header() {
	let [expanded, setExpanded] = React.useState(false)

	const handleOnClick = () => {
		setExpanded(!expanded)
	}

	return (
		<HeaderMenu expanded={expanded} handleOnClick={handleOnClick}></HeaderMenu>
	)
}

export default Header

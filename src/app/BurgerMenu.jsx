function BurgerMenu({expanded, handleOnClick}) {
	return (
		<button
			className='header__menu'
			aria-expanded={expanded ? 'true' : 'false'}
			onClick={handleOnClick}>
			<span className='header__menu-text a11y-hidden'>
				{expanded ? 'Закрыть меню' : 'Открыть меню'}
			</span>
		</button>
	)
}

export default BurgerMenu

import BurgerMenu from './BurgerMenu'

function HeaderMenu({expanded, handleOnClick}) {
	return (
		<header className='header'>
			<a href='/' className='header__logo' aria-label='Яндекс.Дом'></a>
			<BurgerMenu
				expanded={expanded}
				handleOnClick={handleOnClick}></BurgerMenu>
			<ul
				className={'header__links' + (expanded ? ' header__links_opened' : '')}>
				<li className='header__item'>
					<a
						className='header__link header__link_current'
						href='/'
						aria-current='page'>
						Сводка
					</a>
				</li>
				<li className='header__item'>
					<a className='header__link' href='/devices'>
						Устройства
					</a>
				</li>
				<li className='header__item'>
					<a className='header__link' href='/scripts'>
						Сценарии
					</a>
				</li>
			</ul>
		</header>
	)
}

export default HeaderMenu

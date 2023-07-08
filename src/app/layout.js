import Link from 'next/link'
import './globals.css'
import './page.css'

export const metadata = {
	title: 'Яндекс.Дом',
}

export default function RootLayout({children}) {
	return (
		<html lang='en'>
			<body>
				{children}
				<footer className='footer'>
					<ul className='footer__list'>
						<li className='footer__item'>
							<Link className='footer__link' href='/'>
								Помощь
							</Link>
						</li>
						<li className='footer__item'>
							<Link className='footer__link' href='/'>
								Обратная связь
							</Link>
						</li>
						<li className='footer__item'>
							<Link className='footer__link' href='/'>
								Разработчикам
							</Link>
						</li>
						<li className='footer__item'>
							<Link className='footer__link' href='/'>
								Условия использования
							</Link>
						</li>
					</ul>

					<div className='footer__copyright'>© 1997–2023 ООО «Яндекс»</div>
				</footer>
			</body>
		</html>
	)
}

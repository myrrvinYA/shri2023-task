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
				<footer class='footer'>
					<ul class='footer__list'>
						<li class='footer__item'>
							<Link class='footer__link' href='/'>
								Помощь
							</Link>
						</li>
						<li class='footer__item'>
							<Link class='footer__link' href='/'>
								Обратная связь
							</Link>
						</li>
						<li class='footer__item'>
							<Link class='footer__link' href='/'>
								Разработчикам
							</Link>
						</li>
						<li class='footer__item'>
							<Link class='footer__link' href='/'>
								Условия использования
							</Link>
						</li>
					</ul>

					<div class='footer__copyright'>© 1997–2023 ООО «Яндекс»</div>
				</footer>
			</body>
		</html>
	)
}

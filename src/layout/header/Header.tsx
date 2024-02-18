import { HeaderProps } from '../../types/HeaderTypes'
import styles from './Header.module.css'

export const Header = ({ totalPrice, onClickCart }: HeaderProps) => {
	return (
		<header>
			<div className='container d-flex justify-between align-center'>
				<div className={`${styles.headerLeft} d-flex`}>
					<img width={40} height={40} src='./img/logo.png' alt='logo' />
					<div className={styles.content}>
						<h3 className='text-uppercase'>React Sneakers</h3>
						<p>Магазин лучших кроссовок</p>
					</div>
				</div>
				<ul className={`${styles.headerRight} d-flex`}>
					<li
						className='d-flex align-center cu-p'
						onClick={() => onClickCart()}
					>
						<img src='./img/icons/Cart.svg' alt='' />
						<span>{totalPrice} руб.</span>
					</li>
				</ul>
			</div>
		</header>
	)
}

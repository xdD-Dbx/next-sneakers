import { GreenButton } from '../../../components/green-button/GreenButton'
import { TotalPropsType } from '../../../types/CartTypes'
import styles from './Total.module.css'

export const Total = ({ totalPrice, clickOnShop }: TotalPropsType) => {
	return (
		<div className={styles.totalWrapper}>
			<ul
				className='d-flex
				flex-column'
			>
				<li className={`${styles.totalPrice} d-flex align-end`}>
					<span>Итого:</span>
					<div className={styles.line}></div>
					<b>{totalPrice} руб.</b>
				</li>
			</ul>
			<div className={styles.buttonWrapper} onClick={clickOnShop}>
				<GreenButton name={'Оформить заказ'} />
				<img width={13.7} height={12} src='./img/icons/arrow.svg' alt='arrow' />
			</div>
		</div>
	)
}

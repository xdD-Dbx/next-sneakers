import { CartItemProps } from '../../../types/CartTypes'
import styles from './CartItem.module.css'

export const CartItem = ({
	id,
	image,
	name,
	price,
	onRemoveItem,
}: CartItemProps) => {
	return (
		<div className={`${styles.cartItem} d-flex align-center`}>
			<div
				className={`${styles.image} d-flex`}
				style={{
					backgroundImage: `url(${image})`,
				}}
			></div>
			<div className='w100p'>
				<p>{name}</p>
				<div className='d-flex justify-between align-center'>
					<b>{price} руб.</b>
					<button onClick={() => onRemoveItem(id)}>
						<img src='./img/icons/Delete.svg' alt='' />
					</button>
				</div>
			</div>
		</div>
	)
}

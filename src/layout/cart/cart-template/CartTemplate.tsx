import { GreenButton } from '../../../components/green-button/GreenButton'
import { CartEmptyProps } from '../../../types/CartTypes'
import styles from './CartTemplate.module.css'

export const CartTemplate = ({
	image,
	title,
	text,
	buttonText,
	onClose,
}: CartEmptyProps) => {
	return (
		<div className={`${styles.cartEmpty} text-center`}>
			<img src={image} alt='' />
			<h3>{title}</h3>
			<p>{text}</p>
			<div className={styles.buttonWrapper} onClick={onClose}>
				<GreenButton name={buttonText} />
				<img
					width={13.7}
					height={12}
					src='./img/icons/arrowLeft.svg'
					alt='arrow'
				/>
			</div>
		</div>
	)
}

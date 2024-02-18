import { useEffect, useState } from 'react'
import { SneakersCardProps } from '../../../types/HomeTypes'
import styles from './SneakersCard.module.css'

export const SneakersCard = ({
	image,
	name,
	price,
	onPlus,
	added = false,
}: SneakersCardProps) => {
	const [isAdded, setIsAdded] = useState(added)

	useEffect(() => {
		setIsAdded(added)
	}, [added])

	const onClickAdd = () => {
		setIsAdded(!isAdded)
		onPlus()
	}

	return (
		<div className={styles.card}>
			<>
				<img width={133} height={112} src={image} alt='Sneakers' />
				<h5>{name}</h5>
				<div
					className={`${styles.cardBottom} d-flex justify-between align-center`}
				>
					<div className='d-flex flex-column'>
						<span className='text-uppercase'>Цена:</span>
						<b>{price} руб.</b>
					</div>
					<button
						className={`${isAdded ? styles.plusClicked : styles.plus} ${
							styles.clickAdd
						}`}
						onClick={onClickAdd}
					>
						<img height={32} width={32} src='./img/icons/plus.svg' alt='Add' />
						<img
							className={styles.plusClickedImage}
							height={32}
							width={32}
							src='./img/icons/plusClicked.svg'
							alt='Add'
						/>
					</button>
				</div>
			</>
		</div>
	)
}

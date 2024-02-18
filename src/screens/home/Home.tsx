import axios from 'axios'
import { useEffect, useState } from 'react'
import { HomePropsType } from '../../types/HomeTypes'
import styles from './Home.module.css'
import { Skeleton } from './Skeleton'
import { Search } from './search/Search'
import { SneakersCard } from './sneakers-card/SneakersCard'

export const Home = ({
	cartItems,
	setCartItems,
	setTotalPrice,
}: HomePropsType) => {
	const [items, setItems] = useState<any>([])
	const [isLoading, setIsLoading] = useState(true)
	const [searchValue, setSearchValue] = useState('')

	const itemIsAdded = (card: any) =>
		cartItems.some((item: any) => item.idc === card.idc)

	useEffect(() => {
		async function fetchData() {
			await axios
				.get('https://65b01b852f26c3f2139c81de.mockapi.io/cart')
				.then((res) => setCartItems(res.data))
			await axios
				.get('https://65b01b852f26c3f2139c81de.mockapi.io/items')
				.then((res) => setItems(res.data))
			setIsLoading(false)
		}
		fetchData()
	}, [])
	const onChangeCart = () => {
		const newTotalPrice = cartItems.reduce((total: any, item: any) => {
			const itemPrice = Number(item.price.replace(/\s/g, ''))
			return total + itemPrice
		}, 0)
		const formattedTotalPrice = newTotalPrice.toLocaleString()
		setTotalPrice(formattedTotalPrice)
	}
	useEffect(onChangeCart, [cartItems])

	const onAddToCart = async (obj: any) => {
		try {
			const isItemInCart = cartItems.find((item: any) => item.idc === obj.idc)
			if (!isItemInCart) {
				await axios.post(
					'https://65b01b852f26c3f2139c81de.mockapi.io/cart',
					obj
				)
				setCartItems((prev: Array<object>) => [...prev, obj])
				await axios
					.get('https://65b01b852f26c3f2139c81de.mockapi.io/cart')
					.then((res) => setCartItems(res.data))
			}
		} catch (error) {
			alert('Произошла ошибка при добавлении в корзину, повторите попытку')
		}
	}

	return (
		<>
			<main className='page page-home'>
				<div className='container'>
					<div className={styles.content}>
						<div
							className={`${styles.head} d-flex justify-between align-center`}
						>
							<h1>
								{searchValue
									? `Поиск по запросу "${searchValue}"`
									: 'Все кроссовки'}
							</h1>
							<Search
								searchValue={searchValue}
								setSearchValue={setSearchValue}
							/>
						</div>
						<div className='d-flex flex-wrap justify-center'>
							{isLoading
								? [...new Array(12)].map((_, index) => <Skeleton key={index} />)
								: items
										.filter((item: any) =>
											item.name
												.toLowerCase()
												.includes(searchValue.toLowerCase())
										)
										.map((card: any) => {
											return (
												<SneakersCard
													key={card.id}
													{...card}
													cartItems={cartItems}
													added={itemIsAdded(card)}
													onPlus={() => onAddToCart(card)}
												/>
											)
										})}
						</div>
					</div>
				</div>
			</main>
		</>
	)
}

{
}

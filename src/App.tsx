import axios from 'axios'
import { useState } from 'react'
import { Cart } from './layout/cart/Cart'
import { Header } from './layout/header/Header'
import { Home } from './screens/home/Home'

export const App = () => {
	const [cartItems, setCartItems] = useState([])
	const [isOpened, setIsOpened] = useState(false)
	const [confirmed, setConfirmed] = useState(false)
	const [totalPrice, setTotalPrice] = useState('0')
	const [count, setCount] = useState(0)

	const onClickCart = () => {
		document.getElementById('root')?.classList.add('lock')
		setIsOpened(true)
	}

	const onCloseCart = () => {
		document.getElementById('root')?.classList.remove('lock')
		setIsOpened(false)
		setConfirmed(false)
	}
	const onRemoveItem = async (id: number) => {
		try {
			await axios.delete(
				`https://65b01b852f26c3f2139c81de.mockapi.io/cart/${id}`
			)
			setCartItems((prev) => prev.filter((item: any) => item.id !== id))
		} catch (error) {
			setCartItems((prev) => [...prev])
			alert('Произошла ошибка при удалении из корзины, повторите попытку')
		}
	}
	return (
		<div className='wrapper'>
			<Cart
				count={count}
				items={cartItems}
				isOpened={isOpened}
				confirmed={confirmed}
				totalPrice={totalPrice}
				setCount={setCount}
				onClose={onCloseCart}
				setConfirmed={setConfirmed}
				setCartItems={setCartItems}
				onRemoveItem={onRemoveItem}
			/>
			<Header totalPrice={totalPrice} onClickCart={onClickCart} />

			<Home
				cartItems={cartItems}
				setCartItems={setCartItems}
				setTotalPrice={setTotalPrice}
			/>
		</div>
	)
}

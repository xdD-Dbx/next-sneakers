export type CartProps = {
	items: any
	count: number
	isOpened: boolean
	confirmed: boolean
	totalPrice: string
	onClose: Function
	setCount: Function
	setCartItems: Function
	setConfirmed: Function
	onRemoveItem: (id: number) => void
}

export type CartItemProps = {
	id: number
	image: string
	name: string
	price: string
	onRemoveItem: (id: number) => void
}

export type CartEmptyProps = {
	image: string
	title: string
	text: string
	buttonText: string
	onClose: () => void
}

export type TotalPropsType = {
	totalPrice: string
	clickOnShop: () => void
}
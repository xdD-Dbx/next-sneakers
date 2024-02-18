export type HomePropsType = {
	cartItems: Array<object>
	setCartItems: Function
	setTotalPrice: Function
}

export type SneakersCardProps = {
	image: string
	name: string
	price: string
	onPlus: Function
	added: boolean
}

export type SearchProps = {
	searchValue: string
	setSearchValue: (value: string) => void
}

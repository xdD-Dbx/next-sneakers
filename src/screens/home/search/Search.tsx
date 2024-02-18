import { ChangeEvent } from 'react'
import { SearchProps } from '../../../types/HomeTypes'
import styles from './Search.module.css'

export const Search = ({ searchValue, setSearchValue }: SearchProps) => {
	const onChangeSearchValue = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value)
	}

	return (
		<div className={`${styles.searchBox} d-flex align-center`}>
			<img src='./img/icons/Search.svg' alt='' />
			<input
				onChange={onChangeSearchValue}
				value={searchValue}
				placeholder='Поиск...'
			/>
			{searchValue && (
				<button onClick={() => setSearchValue('')}>
					<img src='./img/icons/Delete.svg' alt='' />
				</button>
			)}
		</div>
	)
}

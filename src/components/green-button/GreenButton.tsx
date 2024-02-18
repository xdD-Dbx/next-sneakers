import styles from './GreenButton.module.css'

export const GreenButton = ({ name }: any) => {
	return <button className={styles.greenButton}>{name}</button>
}

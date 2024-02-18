import ContentLoader from 'react-content-loader'

export const Skeleton = () => {
	return (
		<div
			style={{
				margin: '15px',
				padding: '20px 28px 28px 28px',
				border: '1px solid #f3f3f3',
				borderRadius: '30px',
			}}
		>
			<ContentLoader
				speed={2}
				width={150}
				height={202}
				viewBox='0 0 150 202'
				backgroundColor='#f3f3f3'
				foregroundColor='#ecebeb'
			>
				<rect x='0' y='0' rx='10' ry='10' width='150' height='112' />
				<rect x='0' y='130' rx='0' ry='0' width='150' height='15' />
				<rect x='0' y='150' rx='0' ry='0' width='100' height='15' />
				<rect x='0' y='180' rx='0' ry='0' width='80' height='22' />
				<rect x='115' y='170' rx='8' ry='8' width='32' height='32' />
			</ContentLoader>
		</div>
	)
}

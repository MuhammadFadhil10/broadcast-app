const Btn = ({ name, color, clickHandler }) => {
	return (
		<>
			<button
				type='button'
				onClick={(e) => {
					e.preventDefault();
					clickHandler();
				}}
				style={{
					width: '100px',
					height: '50px',
					backgroundColor: `${color}`,
					border: 'none',
					color: 'white',
					fontSize: '1.2rem',
				}}
			>
				{name}
			</button>
		</>
	);
};

export default Btn;

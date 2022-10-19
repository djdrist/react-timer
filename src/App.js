import Timer from './components/Timer/Timer';
import { useState, useEffect } from 'react';

const App = () => {
	const [timer, setTimer] = useState(null);
	const [time, setTime] = useState(0);

	useEffect(() => {
		return () => {
			if (timer) clearInterval(timer);
		};
	}, [timer]);

	const startTimer = () => {
		setTimer(
			setInterval(() => {
				setTime((prevValue) => prevValue + 1);
			}, 1)
		);
	};
	const stopTimer = () => {
		clearInterval(timer);
	};
	const resetTimer = () => {
		clearInterval(timer);
		setTimer(0);
		setTime(0);
	};

	return (
		<div>
			<Timer time={time} />
			<div className='buttons'>
				<button className='buttons__btn' onClick={startTimer}>
					start
				</button>
				<button className='buttons__btn' onClick={stopTimer}>
					stop
				</button>
				<button className='buttons__btn' onClick={resetTimer}>
					reset
				</button>
			</div>
		</div>
	);
};

export default App;

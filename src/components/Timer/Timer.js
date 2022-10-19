import styles from './Timer.module.scss';
import { useState, useEffect } from 'react';

const Timer = ({ time }) => {
	const displayTime = (ms) => {
		let milliseconds = parseInt(ms % 1000),
			seconds = parseInt((ms / 1000) % 60),
			minutes = parseInt((ms / (1000 * 60)) % 60),
			hours = parseInt((ms / (1000 * 60 * 60)) % 24);

		hours = hours < 10 ? '0' + hours : hours;
		minutes = minutes < 10 ? '0' + minutes : minutes;
		seconds = seconds < 10 ? '0' + seconds : seconds;

		return hours + ':' + minutes + ':' + seconds + '.' + milliseconds;
	};

	return (
		<div className={styles.timer}>
			<span className={styles.timer__count}>{displayTime(time)}</span>
		</div>
	);
};

export default Timer;

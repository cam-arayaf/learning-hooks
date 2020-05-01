import { useEffect, useState } from 'react';

const Seconds = () => {
	const [seconds, setSeconds] = useState(0);
	useEffect(() => {
		const intervalId = setInterval(() => setSeconds(seconds => seconds + 1), 1000);
		return () => clearInterval(intervalId);
	}, [seconds]);
	return seconds;
}

Seconds.displayName = 'Seconds';

export default Seconds;
import React, { useState } from 'react';
import Seconds from './Seconds';

const App = () => {
	const [showTimer, setShowTimer] = useState(false);
	return (
		<div className="App">
			<h1>Learning Hooks 2</h1>    
			<button onClick={ () => setShowTimer(!showTimer) }>
				{ !showTimer ? 'Activate Stopwatch':'Turn Off Stopwatch' }
			</button>
			{
				!showTimer ?
					<div className="alert alert-danger">Off</div>
				:
					<div className="alert alert-success"><Seconds/> Seconds</div>
			}
		</div>
	);
}

App.displayName = 'App';

export default App;
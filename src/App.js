import React, { useState } from 'react';
import CounterHooks from './CounterHooks';

export const ThemeContext = React.createContext();

function App() {
	const [theme, setTheme] = useState('green');
	return (
		<ThemeContext.Provider value={{ backgroundColor: theme }}>
			<CounterHooks initialCount={2} />
			<button
				onClick={() =>
					setTheme((prevTheme) => {
						return prevTheme === 'red' ? 'blue' : 'red';
					})
				}
			>
				Toggle Theme
			</button>
		</ThemeContext.Provider>
	);
}

export default App;

import {
	QueryClient,
	QueryClientProvider,
	useQuery,
} from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import './App.scss';
import MainPage from './MainPage';

const App: React.FC = () => {
	// const [countries, setCountries] = useState<[]>([]);
	// const CountryFlags = async () => {
	// 	const response = await fetch('https://restcountries.com/v3.1/all');
	// 	const data = await response.json();
	// 	setCountries(data);
	// };
	// useEffect(() => {
	// 	CountryFlags();
	// 	console.log(countries);
	// }, []);

	// get data with React Query

	return (
		<div className='App'>
			<MainPage />
		</div>
	);
};

export default App;

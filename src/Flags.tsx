import { IonSpinner } from '@ionic/react';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

interface Props {
	score: number;
	setScore: React.Dispatch<React.SetStateAction<number>>;
}

const Flags: React.FC<Props> = ({ score, setScore }) => {
	const [randomCountries, setRandomCountries] = useState<any[]>([]);
	const [correctCountry, setCorrectCountry] = useState<any>();
	const [loser, setLoser] = useState(false);

	const { data, status } = useQuery([1], async () => {
		const response = await fetch('https://restcountries.com/v3.1/all');
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		return response.json();
	});

	useEffect(() => {
		if (status === 'success') {
			makeCountryData(data);
		}
	}, [data, status]);

	const makeCountryData = (country: any) => {
		const randomCountries = [];
		for (let i = 0; i < 4; i++) {
			const randomIndex = Math.floor(Math.random() * 250);
			randomCountries.push(data[randomIndex]);
		}
		setRandomCountries(randomCountries);
		const correctCountry = randomCountries[Math.floor(Math.random() * 4)];
		setCorrectCountry(correctCountry);
	};

	const checkInput = (name: string) => {
		if (name === correctCountry.name.common) {
			setScore(score + 1);
			setTimeout(() => {
				makeCountryData(data);
			}, 1000);
		} else {
			setLoser(true);
			setScore(0);
			setTimeout(() => {
				setLoser(false);
				makeCountryData(data);
			}, 1000);
		}
	};

	if (!correctCountry) return <IonSpinner />;
	return (
		<>
			<div className='question'>
				What is the flag of {correctCountry.name.common}
			</div>

			{!loser ? (
				<div className='flags'>
					{randomCountries.map((country: any) => {
						return (
							<div
								key={country.name.official}
								onClick={() => checkInput(country.name.common)}
								className='country'
							>
								<input type='hidden' name='flag' value={country.name.common} />
								<img src={country.flags.png} width={500} alt='flag' />
							</div>
						);
					})}
				</div>
			) : (
				<div className='flags'>
					{randomCountries.map((country: any) => {
						return (
							<div key={country.name.official} className='country'>
								<input type='hidden' name='flag' value={country.name.common} />
								<img src={country.flags.png} width={500} alt='flag' />
								<div className='revealed'>{country.name.common}</div>
							</div>
						);
					})}
				</div>
			)}
		</>
	);
};
export default Flags;

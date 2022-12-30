// @ts-nocheck
import { IonSpinner } from '@ionic/react';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import Flags from './Flags';

const MainPage: React.FC = () => {
	const [score, setScore] = useState(0);

	return (
		<>
			<div className='header'>Login</div>
			<div className='content'>
				<div className='left'>Leaderboards</div>
				<div className='stuff'>
					<div className='title'>Top</div>
					<div className='game'>
						<Flags score={score} setScore={setScore} />

						<div className='game-score'>
							<div>Score</div>
							<div>{score}</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default MainPage;

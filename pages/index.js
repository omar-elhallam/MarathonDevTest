import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
	const games = [
		{
			title: 'Game 1',
			description: 'Embark on an exciting journey in Game 1!',
			image: '/images/game1.png', // Update with your actual image path
			link: '/Game_1/Test_Marathon',
		},
		{
			title: 'Game 2',
			description: 'Dive into the adventure of Game 2!',
			image: '/images/game2.png', // Update with your actual image path
			link: '/Game_2/index.html',
		},
		{
			title: 'Game 3',
			description: 'Challenge yourself in Game 3!',
			image: '/images/game3.png', // Update with your actual image path
			link: '/Game_3/index.html',
		},
	];

	const [currentGame, setCurrentGame] = useState(0);

	return (
		<div style={{ fontFamily: 'Arial, sans-serif', color: 'white', textAlign: 'center', background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)', minHeight: '100vh', padding: '20px' }}>
			<Head>
				<title>Atome - Game Web Page</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{/* Title */}
			<h1 style={{ fontSize: '36px', marginBottom: '10px' }}>Atome - Game Web Page</h1>

			{/* Description */}
			<p style={{ fontSize: '18px', marginBottom: '30px' }}>
				Welcome to Atome's game page! Choose a game below and enjoy the experience.
			</p>

			{/* Game Display Section */}
			<div style={{ margin: '40px auto', maxWidth: '600px', textAlign: 'center', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '10px', padding: '20px' }}>
				<img
					src={games[currentGame].image}
					alt={games[currentGame].title}
					style={{ width: '100%', borderRadius: '10px', marginBottom: '20px' }}
				/>
				<h2 style={{ marginBottom: '10px' }}>{games[currentGame].title}</h2>
				<p style={{ fontSize: '16px', lineHeight: '1.5', marginBottom: '20px' }}>{games[currentGame].description}</p>
				<a href={games[currentGame].link} target="_blank" rel="noopener noreferrer">
					<button style={{ padding: '15px 30px', fontSize: '16px', cursor: 'pointer', backgroundColor: '#4caf50', color: 'white', border: 'none', borderRadius: '5px' }}>Play Now</button>
				</a>
			</div>

			{/* Navigation Buttons */}
			<div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
				<button
					onClick={() => setCurrentGame((currentGame + games.length - 1) % games.length)}
					style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', backgroundColor: '#4caf50', color: 'white', border: 'none', borderRadius: '5px' }}
				>
					← Previous
				</button>
				<button
					onClick={() => setCurrentGame((currentGame + 1) % games.length)}
					style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', backgroundColor: '#4caf50', color: 'white', border: 'none', borderRadius: '5px' }}
				>
					Next →
				</button>
			</div>
		</div>
	);
}

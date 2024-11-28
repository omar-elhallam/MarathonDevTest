import Head from 'next/head';

export default function Home() {
	return (
		<div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '20px' }}>
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

			{/* Button Section */}
			<div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginBottom: '40px' }}>
				{/* Button 1 */}
				<div>
					<a href="/Game_1/Test_Marathon" target="_blank" rel="noopener noreferrer">
						<button style={{ padding: '15px 30px', fontSize: '16px', cursor: 'pointer' }}>Play Game 1</button>
					</a>
				</div>

				{/* Button 2 */}
				<div>
					<a href="/Game_2/index.html" target="_blank" rel="noopener noreferrer">
						<button style={{ padding: '15px 30px', fontSize: '16px', cursor: 'pointer' }}>Play Game 2</button>
					</a>
				</div>

				{/* Button 3 */}
				<div>
					<a href="/Game_3/index.html" target="_blank" rel="noopener noreferrer">
						<button style={{ padding: '15px 30px', fontSize: '16px', cursor: 'pointer' }}>Play Game 3</button>
					</a>
				</div>
			</div>

			{/* Game Section */}
			<div style={{ margin: '40px auto', maxWidth: '600px', textAlign: 'center' }}>
				{/* Game Image */}
				<img
					src="/path/to/game-image.jpg"
					alt="Game Screenshot"
					style={{ width: '100%', borderRadius: '10px', marginBottom: '20px' }}
				/>

				{/* Game Description */}
				<p style={{ fontSize: '16px', lineHeight: '1.5' }}>
					Experience the thrill of adventure with our latest game. Dive into the world of Atome and explore
					its exciting challenges. Can you master the levels and claim victory? Let’s find out!
				</p>
			</div>
		</div>
	);
}
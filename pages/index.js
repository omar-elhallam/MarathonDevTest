import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
	return (
		<div className="container">
			<Head>
				<title>Next.js Starter!</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Header title="Omar El Hallam" />
				<p className="description">
					Click bellow to play my first Game <code>pages/index.js</code>
				</p>
			</main>

			{/* New Button Section */}
			<div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0px', padding: '0 20px' }}>
				{/* Left Button */}
				<a href="/Game_1/TestGame.html" target="_blank" rel="noopener noreferrer" style={{ textAlign: 'left' }}>
					<button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', marginTop: '-20px' }}>
						Twitter play HERE!
					</button>
				</a>

				{/* Middle Button */}
				<a href="/Game_2/index.html" target="_blank" rel="noopener noreferrer" style={{ textAlign: 'center' }}>
					<button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', marginTop: '-20px' }}>
						pas interessant
					</button>
				</a>

				{/* Right Button */}
				<a href="" target="_blank" rel="noopener noreferrer" style={{ textAlign: 'right' }}>
					<button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', marginTop: '-20px' }}>
						pas de jeu ici
					</button>
				</a>
			</div>

			<Footer />
		</div>
	)
}

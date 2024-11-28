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
				<Header title="Welcome to my app!" />
				<p className="description">
					Get started by editing <code>pages/index.js</code>
				</p>
			</main>

			{/* New Button Section */}
			<div style={{ textAlign: 'center', marginTop: '20px' }}>
				<a href="/game_1/index.html" target="_blank" rel="noopener noreferrer">
					<button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
						Play My Game!
					</button>
				</a>
			</div>

			<Footer />
		</div>
	)
}

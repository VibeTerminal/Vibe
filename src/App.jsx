const services = [
  {
    name: 'CoinGecko',
    category: 'Market Data',
    description: 'Track token prices, market caps, and trends across major exchanges.',
    url: 'https://www.coingecko.com',
  },
  {
    name: 'DefiLlama',
    category: 'DeFi Analytics',
    description: 'Monitor TVL, protocol revenues, and ecosystem growth in one place.',
    url: 'https://defillama.com',
  },
  {
    name: 'TradingView',
    category: 'Charting',
    description: 'Use advanced technical indicators and real-time chart layouts.',
    url: 'https://www.tradingview.com',
  },
  {
    name: 'Dune',
    category: 'On-Chain Data',
    description: 'Explore community dashboards and SQL-powered blockchain analytics.',
    url: 'https://dune.com',
  },
  {
    name: 'Revoke.cash',
    category: 'Wallet Security',
    description: 'Audit token approvals and revoke risky permissions quickly.',
    url: 'https://revoke.cash',
  },
  {
    name: 'Rabby Wallet',
    category: 'Wallet',
    description: 'A multi-chain wallet focused on transparent transaction simulation.',
    url: 'https://rabby.io',
  },
]

export default function App() {
  return (
    <div className="app">
      <header className="hero">
        <p className="badge">VibeTerminal</p>
        <h1>Useful Crypto Services, Curated for Builders and Traders</h1>
        <p>
          Launch your workflow with trusted crypto tools for analytics, security, and decision-making.
        </p>
      </header>

      <main>
        <section>
          <h2>Featured Services</h2>
          <div className="grid">
            {services.map((service) => (
              <article key={service.name} className="card">
                <span>{service.category}</span>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <a href={service.url} target="_blank" rel="noreferrer">
                  Open Service →
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <p>Built with React + Vite • Ready for GitHub Pages deployment</p>
      </footer>
    </div>
  )
}

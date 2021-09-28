import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Coming Soon!!!</h1>
      <img
        src="/coming-soon.gif"
        className={styles.comingSoonImage}
      />
      <h1>Wallet Wally</h1>
      <p>Wallet Wally is a series of randomly generated NFT each with a range of unique properties and rarity.</p>
    </div>
  )
}

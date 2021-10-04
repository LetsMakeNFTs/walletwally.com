import styles from '../styles/Layout.module.css'

export default function Layout({ children }) {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h3>Wallet Wally</h3>
      </header>
      <main className={styles.main}>
        <div className={styles.content}>
          {children}
        </div>
      </main>
      <footer className={styles.footer}>
        Copyright &copy; {new Date().getFullYear()}
      </footer>
    </section>
  )
}
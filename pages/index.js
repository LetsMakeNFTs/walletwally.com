import QRCode from "../components/QRCode"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <QRCode data="http://google.com" />
    </div>
  )
}

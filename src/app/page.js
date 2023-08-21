import Image from 'next/image'
import styles from './page.module.css'
// COMPONENTS
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.center}>
        <div className={styles.perfil}>
          <h1>Eyra Harbar</h1>
          <a href="https://instagram.com/eyraharbar?igshid=MzRlODBiNWFlZA==">@eyraharbar</a>
          <a href="https://instagram.com/tallercultura?igshid=MzRlODBiNWFlZA==">@tallercultura</a>
        </div>

        <Image
          className={styles.logo}
          src="/perfil.png"
          alt="EyraHarbar"
          width={320}
          height={260}
          priority
        />
      </div>
      
    </main>
  )
}

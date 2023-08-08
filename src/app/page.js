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
          <a href="https://7hosoft.vercel.app">@eyraharbar</a>
          <a href="https://7hosoft.vercel.app">@tallercultura</a>
        </div>
        <div className={styles.perfilDescription}>
          <p>
            (Bocas del Toro, 1972) Ha escrito poesía, cuento y literatura infantil. Su trabajo poético ha sido reconocido en varios premios nacionales y su obra está recogida en antologías y revistas del país e internacionales.
          </p>
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

import Link from 'next/link';
import Image from 'next/image';
/* COMPONENTS */
/* STYLES */
import styles from '../styles/Navbar.module.css'

export default function Navbar() {

    const link = () => {
        var sound = new Audio('sounds/close.wav')
        sound.play()
    }

    return (
        <nav className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logoA}>
                    <a
                        href="/"
                    >
                        <Image
                            src="/florvida.png"
                            alt="Eyra Harbar"
                            className={styles.logo}
                            width={190}
                            height={170}
                            priority
                        />
                    </a>
                </div>
                <div className={styles.navbar}>
                    <div className={styles.item}>
                        <Link href="/biography">
                            <i className="bi bi-house-fill"></i>Biografía
                        </Link>
                    </div>
                    <div className={styles.item}>
                        <Link href="/meritos">
                            <i className="bi bi-people-fill"></i>Méritos y libros
                        </Link>
                    </div>
                    <div className={styles.item}>
                        <Link href="/literaria">
                            <i className="bi bi-box-seam"></i>De su obra literaria
                        </Link>
                    </div>
                    <div className={styles.item}>
                        <Link href="/photos">
                            <i className="bi bi-envelope-paper-fill"></i>Fotos
                        </Link>
                    </div>
                    <div className={styles.item}>
                        <Link href="/asociations">
                            <i className="bi bi-envelope-paper-fill"></i>Asociaciones
                        </Link>
                    </div>
                </div>

            </div>
        </nav>
    )
}
import Image from 'next/image'
// STYLES
import styles from '../obras/obras.module.css'
// COMPONENTS
import Navbar from '../../components/Navbar';

export default function Pages() {
    return (
        <main className={styles.main}>
            <Navbar />
            <div className={styles.poesia}>
                <h1>
                    Poesía
                </h1>
                <div className={styles.container}>
                    <Image
                        className={styles.imageS1}
                        src="/ciudad.jpg"
                        alt=""
                        width={1800}
                        height={400}
                    /* objectFit="cover" */
                    />
                    <div className={styles.title1}>
                        <h2>Paraíso quemado</h2>
                    </div>
                    <p>
                        Paraíso quemado obtuvo el Primer Premio de Poesía León A. Soto de la Alcaldía de Panamá en 2013. En él, Eyra Harbar refleja su trabajo como abogada de personas refugiadas y migrantes al rememorar las vicisitudes que atraviesan al salir forzadamente de sus países de origen. De este poemario ha dicho Giovanna Benedetti que “Huir” pues, ese “verbo sin equipaje” que se conjuga hoy en presente y en clave de globalización, es inflexión que solapa un entramado de vergüenzas. De desafiar esas vergüenzas, trata este poemario”. Es un poemario breve, construido con las desafiantes imágenes de una naturaleza siempre en contra del trayecto de los migrantes y que concluyen en una respuesta oficial que nunca llega.
                    </p>
                    <div className={styles.container2}>
                        <div
                            href=''
                            className={styles.card}>
                            <h3>Paraíso quemado</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quia molestias nihil tenetur consectetur neque fugiat alias dolor ut expedita, necessitatibus ipsum debitis pariatur fuga eum harum minima aliquam. Alias?
                            </p>
                        </div>
                        <div
                            href=''
                            className={styles.card}>
                            <h3>Paraíso quemado</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti harum atque enim voluptatibus recusandae omnis tempore minima rem sit optio eligendi officiis vitae non beatae, animi ratione aut id excepturi?</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

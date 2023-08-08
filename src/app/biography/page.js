import styles from '../biography/biography.module.css'
// COMPONENTS
import Navbar from '../../components/Navbar';

export default function Page() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.biography}>
      <h1>
        Biografía
      </h1>
      <p>
      Eyra Harbar nació el 19 de agosto de 1972 en Bocas del Toro, en donde vivió parte de su infancia, mudándose luego a la Ciudad de Panamá, su lugar de residencia actual. Ha escrito poesía, cuento y literatura infantil.

Atraída desde muy joven por las ventas de libros y tertulias literarias, siendo una adolescente escribió un ensayo sobre la vejez obteniendo el primer lugar de un concurso estudiantil de la Caja de Seguro Social de Panamá en 1989. Un par de años después, participó con un grupo de jóvenes universitarios interesados en la poesía, bajo la guía del reconocido poeta Héctor Collado, en pláticas que llamaron el “Taller José Martí” en honor al escritor cubano de Nuestra América. Participa desde entonces en recitales y otras actividades de la cultura local.

En 1995, a los 23 años se convierte en la tercera mujer en ganar el Premio “Esther María Osses” del Instituto Panameño de Estudios Laborales del Ministerio de Trabajo, suceso que merecerá la entrega del galardón por parte de la histórica líder sindical Marta Matamoros. Al año siguiente participa en el Concurso “Demetrio Herrera Sevillano” de la Universidad de Panamá obteniendo el primer lugar con su obra Donde habita el escarabajo, en el que se muestran cápsulas de carácter existencial, con profundidad y lenguaje breve. Por su parte, en el nuevo siglo, Espejos se apunta como ganador del Concurso de Poesía Joven “Gustavo Batista Cedeño” que concede el Instituto Nacional de Cultura (hoy Ministerio de Cultura) a poetas emergentes.

Movida por su trabajo como abogada de personas solicitantes de refugio y las vicisitudes que atraviesan al salir forzadamente de sus países de origen, escribe Paraíso quemado con el que obtuvo el Primer Premio de Poesía León A. Soto de la Alcaldía de Panamá en 2013. Con Desertores de alborada abordará las condiciones de explotación laboral contemporánea, mismo que se gana el Premio “Esther María Osses” del Concurso del Instituto Panameño de Estudios Laborales, veinte años después de su primera ocasión.

En otros géneros, ha publicado No está de más como propuesta de minificción literaria. Su producción literaria en literatura infantil y juvenil ha girado en torno a la ecoliteratura con los trabajos Cuentos para el planeta y el cuaderno de ecopoemas La canción de la lluvia, ambos honrados con el primer premio por el concurso “Esther María Osses” para la literatura infantil y juvenil panameña que concede la Universidad de Las Américas (UDELAS). En 2022 gana el primer lugar del Concurso Nacional de Literatura Infantil y Juvenil “Carlos Francisco Changmarín” del Ministerio de Cultura de Panamá con el poemario Autobús esperanza que impulsa a continuar pese a las adversidades.

      </p>
      </div>
      
      
    </main>
  )
}

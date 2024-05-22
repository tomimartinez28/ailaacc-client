import { StickyScroll } from '../../components/ui/sticky-scroll-reveal'
import img1 from '../../assets/img/img1.webp'
import img2 from '../../assets/img/img2.webp'
import img3 from '../../assets/img/img3.webp'

export function AboutSection () {
  const contentArray = [
    {
      title: 'SOBRE NOSOTROS', description: 'Somos referente en prácticas inclusivas para personas con discapacidad, destacándonos en la comunicación y la accesibilidad cognitiva. Nos enfocamos en un modelo de intervención innovador y de excelencia, poniendo siempre al niño en el centro de nuestra gestión interdisciplinaria.', content: <img src={img1} />
    },
    {
      title: 'NUESTRO EQUIPO', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam minima, eos explicabo repellendus commodi est natus fugiat id quaerat asperiores sint fuga? Aut quisquam perferendis dolore ratione dolores doloremque maiores.', content: <img src={img2} />
    },
    {
      title: 'MISION', description: 'Garantizamos el derecho a la educación para niños y jóvenes con discapacidad, promoviendo un modelo social que elimina barreras de aprendizaje. Trabajamos en equipo con diversas disciplinas para ofrecer un abordaje personalizado y flexible. Fomentamos la inclusión en la comunidad y en actividades extracurriculares como arte, música y deporte, generando igualdad de oportunidades y desarrollo integral.', content: <img src={img3} />
    }

  ]
  return (

    <StickyScroll content={contentArray} />

  )
}

import { StickyScroll } from '../../components/ui/sticky-scroll-reveal'
import img1 from '../../assets/img/img1.webp'
import img2 from '../../assets/img/img2.webp'
import img3 from '../../assets/img/img3.webp'
import img4 from '../../assets/img/img4.webp'

export function AboutSection () {
  const contentArray = [
    {
      title: 'SOBRE NOSOTROS', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam minima, eos explicabo repellendus commodi est natus fugiat id quaerat asperiores sint fuga? Aut quisquam perferendis dolore ratione dolores doloremque maiores.', content: <img src={img1} />
    },
    {
      title: 'NUESTRO EQUIPO', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam minima, eos explicabo repellendus commodi est natus fugiat id quaerat asperiores sint fuga? Aut quisquam perferendis dolore ratione dolores doloremque maiores.', content: <img src={img2} />
    },
    {
      title: 'TEST', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam minima, eos explicabo repellendus commodi est natus fugiat id quaerat asperiores sint fuga? Aut quisquam perferendis dolore ratione dolores doloremque maiores.', content: <img src={img3} />
    },
    {
      title: 'TEST', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam minima, eos explicabo repellendus commodi est natus fugiat id quaerat asperiores sint fuga? Aut quisquam perferendis dolore ratione dolores doloremque maiores.', content: <img src={img4} />
    }
  ]
  return (

    <StickyScroll content={contentArray} />

  )
}

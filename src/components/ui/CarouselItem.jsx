export function CarouselItem ({ service }) {
  return (

    <div className={`${service.imgSrc} h-full  bg-cover bg-center bg-no-repeat text-pretty`}>
      <div className='absolute w-[40%] top-7 left-24 p-8 bg-white/30'>
        <h2 className='text-2xl font-semibold font-mono'>{service.name}</h2>
        <p className='text-pretty'>{service.description}</p>

      </div>

    </div>
  )
}

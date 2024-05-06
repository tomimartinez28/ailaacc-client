export function CarouselItem ({ service }) {
  return (

    <div className={`${service.imgSrc} h-full  bg-cover bg-center bg-no-repeat overflow-clip`}>
      <div className='
      flex flex-col justify-center
      absolute bottom-0 w-full h-[30%]
       backdrop-blur-sm
      md:w-[40%] md:h-[50%] md:top-7 md:left-24
      p-2
      bg-[#f6f6f6]/10
     '
      >
        <h2 className='md:text-2xl text-xl font-semibold text-black/90'>{service.name}</h2>
        <p className='text-base md:text-base text-black/70'>{service.description}</p>

      </div>

    </div>
  )
}

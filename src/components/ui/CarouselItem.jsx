export function CarouselItem ({ item }) {
  return (

    <div className={`${item.imgSrc} h-full bg-cover bg-center bg-no-repeat overflow-clip`}>
      <div className='
      flex flex-col justify-center
      absolute bottom-0 w-full h-[30%]
      gap-2
      md:w-[50%] md:h-[50%] md:top-7 md:left-24
      p-2
      mb-1

     '
      >
        <div className='bg-customOrange/70 rounded-full  px-3 py-2 flex justify-center'>
          <h2 className='md:text-2xl text-xl font-semibold text-black/75 text-center '>{item.title}</h2>
        </div>
        <p className='text-base md:text-base text-[#f6f6f6]/70 px-3 '>{item.description}</p>

      </div>

    </div>
  )
}

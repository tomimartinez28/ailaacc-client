export function ServiceCard ({ service }) {
  const { name, imgSrc } = service

  return (

    <div
      className=' size-64 rounded-lg flex flex-col justify-center items-center hover:cursor-pointer mb-5'
    >

      <img className='rounded-full size-44 md:size-64' src={imgSrc} alt='' />
      <h5 className='font-bold text-center text-sm md:text-2xl mt-4 text-black/80'>
        {name}
      </h5>

    </div>

  )
}

export function ServiceCard ({ service }) {
  const { name, imgSrc } = service

  return (
    <div
      className='text-[#f6f6f6] size-64 rounded-lg flex flex-col justify-center items-center hover:cursor-pointer'

    >

      <img className='rounded-full size-32 md:size-48' src={imgSrc} alt='' />
      <h5 className='font-bold text-center text-sm text-gray-90'>
        {name}
      </h5>

    </div>
  )
}

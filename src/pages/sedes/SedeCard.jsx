export function SedeCard ({ selected, onClick, title, address, imgSrc }) {
  return (
    <div
      onClick={onClick}
      className={`flex overflow-hidden h-[100px] w-full cursor-pointer hov ${selected ? ' bg-backgroundColor' : 'bg-[#f6f6f6] text-black/80'}`}
    >
      <img className='h-full w-[100px] mb-10 ' src={imgSrc} alt={`Foto de la sede de ${title}`} />
      <div className='h-full flex flex-col ml-10 mb-10 justify-center items-center '>
        <h2
          className='text-base md:text-xl font-bold text-black/70'
        >
          {title}
        </h2>

      </div>

    </div>
  )
}

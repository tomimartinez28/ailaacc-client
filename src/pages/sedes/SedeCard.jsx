export function SedeCard ({ selected, onClick, title, address, imgSrc }) {
  return (
    <div
      onClick={onClick}
      className={`flex md:flex-row flex-col justify-center border h-[100px] w-full cursor-pointer ${selected ? ' bg-backgroundColor' : 'bg-[#f6f6f6] text-black/80'} hover:shadow-inner`}
    >

      <div className='md:h-full md:ml-10 md:mb-10
      w-full h-full
      flex flex-col justify-center md:items-start items-center'
      >
        <h2
          className='text-base md:text-xl font-bold text-black/70'
        >
          {title}
        </h2>

      </div>

    </div>
  )
}

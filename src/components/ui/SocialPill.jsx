export function SocialPill (props) {
  return (
    <div className='rounded-full border border-black p-2 hover:text-[#f6f6f6] hover:bg-black/80 cursor-pointer'>
      {props.children}
    </div>
  )
}

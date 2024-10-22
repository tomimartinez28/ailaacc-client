import React from 'react'
export function SocialPill (props) {
  return (
    <div className='rounded-full border border-customOrange p-2 hover:text-[#f6f6f6] hover:bg-black/80 cursor-pointer transition-all duration-200'>
      {props.children}
    </div>
  )
}

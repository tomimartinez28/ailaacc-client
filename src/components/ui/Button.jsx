export function Button (props, classname, type) {
  return (
    <button type={type} className={`${classname} bg-customOrange font-bold px-3 py-2 text-[#f6f6f6] rounded-lg shadow-md`}>{props.children}</button>

  )
}

export function Button (props) {
  return (
    <button type={props.type} className={`${props.classname} font-bold px-3 py-2 text-[#f6f6f6] rounded-lg shadow-md transition-all duration-200`}>{props.children}</button>

  )
}
